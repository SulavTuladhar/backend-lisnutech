const blogModel = require('./../../models/blog.model');
const fs = require('fs');
const path = require('path');

function map_page_request(content,contentData){
    if(contentData.title)
        content.title = contentData.title;
    if(contentData.description)
        content.description = contentData.description;
    if(contentData.content)
        content.content = contentData.content;
    if(contentData.img)
        content.img = contentData.img;
}


const insert = (req,res,next)=>{
    const data = req.body;
    if(req.fileTypeError){
        return next({
            msg: 'Invalid file format',
            status: 414
        })
    }
    console.log('img >>', req.file)
    // Prepare data
    if(req.file){
      data.img = req.file.filename;
    }
    const newContent = new blogModel({});
    map_page_request(newContent,data);
    newContent.save()
        .then(function(saved){
            res.json(saved)
        })
        .catch(function(err){
            if(err){
                next(err);
            }
        })
}

const find =(req,res,next)=>{
    var condition= {}
    blogModel.find(condition)
        .sort({
            _id: -1
        })
        .exec(function(err,page){
            if(err){
                return next(err);
            }
            res.json(page)
        })
}

const findById = (req,res,next) => {
    blogModel.findById(req.params.id, function(err,product){
        if(err){
            return next(err);
        }
        if(!product){
            return next({
                msg: 'Product not found',
                status: 404
            })
        }
        console.log('pageeeeeeeeeeeeeeee >>', product)
        res.json(product)
    })
}

const update = (req,res,next) =>{
    blogModel.findById(req.params.id, function(err,page){
        if(err){
            return next(err)
        }
        if(!page){
            return next({
                msg: 'Page Not Found',
                status: 404
            })
        }
        if(req.fileTypeError){
            return next({
                msg: 'Invalid file format',
                status: 414
            })
        }
        const data = req.body;
        if(req.file){
            data.img = req.file.filename;
        }
        var oldImage = page.img;

        // Product found now update
        map_page_request(page, data);
        page.save(function(err,updated){
            if(err){
                return next(err)
            }
            // Remove existion images for server
            if(req.file){
                fs.unlink(path.join(process.cwd(),'uploads/images/'+ oldImage), function(err,done){
                    if(err){
                        console.log('Error in removing', err)
                    }else{
                        console.log('Sucess in removing')
                    }
                })
            }
            res.json(updated)
        })
    })
}

function remove(req,res,next){
    blogModel.findById(req.params.id, function(err,product){
        if(err){
            return next(err)
        }
        if(!product){
            return next({
                msg: 'Product not found',
                status: 404
            })
        }
        product.remove(function(err,removed){
            if(err){
                return next(err)
            }
            res.json(removed)
        })
    })
}



module.exports = {
    // Object shorthand
    insert,
    find,
    findById,
    update,
    remove
}
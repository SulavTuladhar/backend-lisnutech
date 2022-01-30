const pageModel = require('../../models/pages/FirstPage.model');
const fs = require('fs');
const path = require('path');

function map_product_request(product,productData){
    if(productData.name)
        product.name = productData.name;
    if(productData.description)
        product.description = productData.description;
    if(productData.photo)
        product.photo = productData.photo;
}

const insert = (req,res,next)=>{
    if(req.fileTypeError){
        return next({
            msg: 'Invalid file format',
            status: 414
        })
    }
    const data = req.body;
    // Prepare data
    if(req.file){
        data.photo = req.file.filename;
    }
    const newPage = new pageModel({});
    map_product_request(newPage,data);
    newPage.save()
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
    pageModel.find(condition)
        // .sort({
        //     _id: -1
        // })
        .exec(function(err,page){
            if(err){
                return next(err);
            }
            res.json(page)
        })
}

const update = (req,res,next) =>{
    var condition = {}
    pageModel.find(condition, function(err,page){
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
            data.photo = req.file.filename;
        }
        var oldImage = product.photo;

        // Product found now update
        map_product_request(product, data);
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

module.exports = {
    // Object shorthand
    insert,
    find,
    update,
}
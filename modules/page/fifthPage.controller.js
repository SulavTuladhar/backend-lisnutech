const pageModel = require('../../models/pages/FifthPage.model');
const fs = require('fs');
const path = require('path');

function map_product_request(product,productData){
    if(productData.title)
        product.title = productData.title;
    if(productData.description)
        product.description = productData.description;
    if(productData.img)
        product.img = productData.img;
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
        data.img = req.file.filename;
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
    pageModel.findById(req.params.id, function(err,product){
        if(err){
            return next(err);
        }
        if(!product){
            return next({
                msg: 'Product not found',
                status: 404
            })
        }
        console.log('product >>', product)
        res.json(product)
    })
}

const update = (req,res,next) =>{
    pageModel.findById(req.params.id, function(err,page){
        console.log(page)
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
        map_product_request(page, data);
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
    findById,
    update,
}
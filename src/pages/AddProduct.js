import React from 'react'

export default function AddProduct() {

    let textArea = {
        "height": "10rem"
    }

    return (
        <>
            <h1 className="fw-light">Manage Products</h1>
            <h2 className='fw-light'>Add Products</h2>
            <form>
                <hr />
                <div className="d-flex justify-content-evenly">
                    <div className="inputFields">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" name='title' className="form-control" id="title" aria-describedby="emailHelp" />
                    </div>
                    <div className="inputFields">
                        <label htmlFor="sku" className="form-label">SKU</label>
                        <input type="text" name='sku' className="form-control" id="sku" />
                    </div>

                    <div className="dropDown">
                        <label htmlFor="sku" className="form-label">Categories</label>
                        <select className="form-select" aria-label="Default select example">
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                </div>

                <div className="mt-4 ms-3">
                    <fieldset className='border rounded p-4 mt-4'>
                        <legend className='col-1 text-center rounded legendTag'>Content</legend>
                        <div className="form-floating mb-4">
                            <textarea className="form-control" placeholder="Heading" id="floatingTextarea2" style={textArea}></textarea>
                            <label htmlFor="floatingTextarea2">Heading</label>
                        </div>

                        <div className="form-floating mb-4">
                            <textarea className="form-control" placeholder="Heading" id="floatingTextarea2" style={textArea}></textarea>
                            <label htmlFor="floatingTextarea2">Sub heading</label>
                        </div>

                        <div className="container">
                            <div className="">
                                <div className="row">
                                    <div className="col-6">
                                        <label htmlFor="productImg" className="form-label">Lifestyle Product Image</label>
                                        <input 
                                        type="file"
                                        required name='productImg'
                                        className="form-control"
                                        id="productImg"
                                        accept="image/jpg, image/jpeg, image/png, image/apng, image/avif, image/gif, image/svg+xml, image/webp" 
                                        />
                                    </div>


                                    <div className="col-6">
                                        <label htmlFor="productImgdesc" className="form-label">Image description</label>
                                        <input type="text" name='productImgdesc' className="form-control" id="productImgdesc" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                </div>


                <div className="mt-4 ms-3">
                    <fieldset className='border rounded p-4 mt-4'>
                        <legend className='col-2 text-center rounded legendTag mb-4'>Batch Details</legend>
                        <div class="form-check form-switch mt-4">
                            <input class="form-check-input" type="checkbox" role="switch" id="best_before" />
                            <label class="form-check-label" for="best_before">Show Best Before Date</label>
                        </div>

                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" role="switch" id="batch_number" />
                            <label class="form-check-label" for="batch_number">Show Batch Number</label>
                        </div>
                    </fieldset>
                </div>



                <div className="mt-4 ms-3">
                    <fieldset className='border rounded p-4 mt-4'>
                        <legend className='col-1 text-center rounded legendTag'>Recipes</legend>
                        <div className="container">
                            <div className="">
                                <div className="row">
                                    <div className="col-6">
                                        <label htmlFor="productImg" className="form-label mb-0 mt-4">Recipe 1</label>
                                        <input type="text" name='productImg' className="form-control" id="productImg" />
                                    </div>


                                    <div className="col-6">
                                        <label htmlFor="productImg" className="form-label mb-0 mt-4">Recipe 1 URL</label>
                                        <input type="text" name='productImg' className="form-control" id="productImg" />
                                    </div>

                                    <div className="col-6">
                                        <label htmlFor="productImg" className="form-label mb-0 mt-4">Recipe 2</label>
                                        <input type="text" name='productImg' className="form-control" id="productImg" />
                                    </div>


                                    <div className="col-6">
                                        <label htmlFor="productImg" className="form-label mb-0 mt-4">Recipe 2 URL</label>
                                        <input type="text" name='productImg' className="form-control" id="productImg" />
                                    </div>

                                    <div className="col-6">
                                        <label htmlFor="productImg" className="form-label mb-0 mt-4">Recipe 3</label>
                                        <input type="text" name='productImg' className="form-control" id="productImg" />
                                    </div>


                                    <div className="col-6">
                                        <label htmlFor="productImg" className="form-label mb-0 mt-4">Recipe 3 URL</label>
                                        <input type="text" name='productImg' className="form-control" id="productImg" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                </div>



                <div className="text-center m-4">
                    <button type="submit" className="btn btn-lg btn-primary">Add product</button>
                </div>
            </form>
        </>
    )
}

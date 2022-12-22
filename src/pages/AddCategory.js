import React from 'react'

export default function AddCategory() {

    let textArea = {
        "height": "10rem"
    }

    return (
        <>
            <h1 className="fw-light">Manage Categories</h1>
            <h2 className='fw-light'>Add Categories</h2>
            <form>
                <hr />
                <div className="mt-4">
                    <div className="w-max ms-3">
                        <label htmlFor="title" className="form-label">Display Name</label>
                        <input type="text" name='title' className="form-control" id="title" aria-describedby="emailHelp" />
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
                            <div className="row">
                                <div className="col-6">
                                    <label htmlFor="categoryImgAndVideo" className="form-label">Background Image/Video (Alt text/File)</label>
                                    <input
                                        type="file"
                                        required
                                        name='categoryImgAndVideo'
                                        className="form-control"
                                        id="categoryImgAndVideo"
                                        accept="image/jpg, image/jpeg, image/png, image/apng, image/avif, image/gif, image/svg+xml, image/webp, video/mp4, video/mov, video/avi, video/flv, video/ogg"
                                    />
                                </div>


                                <div className="col-6">
                                    <label htmlFor="categoryImgAndVideodesc" className="form-label">Background Image/Video description</label>
                                    <input type="text" name='categoryImgAndVideodesc' className="form-control" id="categoryImgAndVideodesc" />
                                </div>
                            </div>
                        </div>
                    </fieldset>
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
                            <div className="row">
                                <div className="col-6">
                                    <label htmlFor="categoryBtn" className="form-label">Name of button</label>
                                    <input
                                        type="text"
                                        required
                                        name='categoryBtn'
                                        className="form-control"
                                        id="categoryBtn"
                                    />
                                </div>


                                <div className="col-6">
                                    <label htmlFor="btnLink" className="form-label">Name of button link</label>
                                    <input
                                        type="text"
                                        required
                                        name='btnLink'
                                        className="form-control"
                                        id="btnLink"
                                    />
                                </div>

                                <div className="col-6">
                                    <label htmlFor="altCategoryImg" className="form-label mb-1 mt-4">Image (Alt text/File)</label>
                                    <input
                                        type="file"
                                        required
                                        name='altCategoryImg'
                                        className="form-control"
                                        id="altCategoryImg"
                                        accept="image/jpg, image/jpeg, image/png, image/apng, image/avif, image/gif, image/svg+xml, image/webp"
                                    />
                                </div>

                                <div className="col-6">
                                    <label htmlFor="altCategoryImgDesc" className="form-label mb-1 mt-4">Alternate Image description</label>
                                    <input
                                        type="text"
                                        required
                                        name='altCategoryImgDesc'
                                        className="form-control"
                                        id="altCategoryImgDesc"
                                    />
                                </div>

                            </div>
                        </div>
                    </fieldset>
                </div>

                <div className="text-center m-4">
                    <button type="submit" className="btn btn-lg btn-primary">Add category</button>
                </div>
            </form>
        </>
    )
}

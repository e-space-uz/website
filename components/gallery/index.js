import React, { useState, useRef, useMemo } from 'react'
import ImageViewer from 'react-simple-image-viewer'
import { AddCircleOutline, Cancel } from '@material-ui/icons'
import { CircularProgress } from '@material-ui/core'
import { request } from 'request/request'

const Gallery = ({ gallery, setGallery }) => {
    const inputRef = useRef(null)
    const [previewVisible, setPreviewVisible] = useState(false)
    const [selectedImageIndex, setSelectedImageIndex] = useState(0)
    const [error, setError] = useState(false)

    const imageLinks = useMemo(
        () =>
            gallery?.map(
                (image) => `https://cdn.api.e-space.javelin.uz/espace/${image}`,
            ),
        [gallery],
    )

    const [loading, setLoading] = useState(false)

    const addNewImage = (image) => {
        setGallery((prev) => [...prev, image])
    }

    const imageClickHandler = (index) => {
        setSelectedImageIndex(index)
        setPreviewVisible(true)
    }

    const inputChangeHandler = (e) => {
        setLoading(true)
        setError(false)
        const file = e.target.files[0]

        if (!file) {
            setLoading(false)
            return
        }
        if (file?.size > 5242880) {
            setLoading(false)
            setError(true)
            return
        }

        const data = new FormData()
        data.append('file', file)
        data.append('comment', '')

        request
            .post('/file-upload', data, {
                headers: {
                    'Content-Type': 'mulpipart/form-data',
                },
            })
            .then((res) => {
                addNewImage(res.data.file_path)
            })
            .finally(() => setLoading(false))
    }

    const deleteImage = (id) => {
        setGallery((prev) =>
            prev.filter((galleryImageId) => galleryImageId !== id),
        )
    }

    const closeButtonHandler = (e, link) => {
        e.stopPropagation()
        deleteImage(link.replace('https://cdn.api.e-space.javelin.uz/espace/', ''))
    }

    const handleKeyDown = (event) => {
        console.log(event)
    }

    return (
        <div className="Gallery">
            {imageLinks?.map((link, index) => (
                <div
                    className="block"
                    key={index}
                    onClick={() => imageClickHandler(index)}
                    onKeyDown={handleKeyDown}
                    role="button"
                    tabIndex={0}
                >
                    <button
                        type="button"
                        className="close-btn"
                        onClick={(e) => closeButtonHandler(e, link)}
                    >
                        <Cancel />
                    </button>
                    <img src={link} alt="" />
                </div>
            ))}

            {gallery.length < 6 && (
                <div>
                    <div
                        className={`add-block block ${
                            error ? 'error-block' : ''
                        }`}
                        onClick={() => inputRef.current.click()}
                        onKeyDown={handleKeyDown}
                        role="button"
                        tabIndex={0}
                    >
                        <div className="add-icon">
                            {!loading ? (
                                <AddCircleOutline
                                    style={{ fontSize: '35px' }}
                                />
                            ) : (
                                <CircularProgress />
                            )}
                        </div>
                        <input
                            type="file"
                            className="hidden"
                            ref={inputRef}
                            onChange={inputChangeHandler}
                        />
                    </div>
                    {error && (
                        <p className="text">Максимальный размер файла - 5 МБ</p>
                    )}
                </div>
            )}

            {previewVisible && (
                <ImageViewer
                    src={imageLinks}
                    currentIndex={selectedImageIndex}
                    disableScroll
                    onClose={() => setPreviewVisible(false)}
                />
            )}
        </div>
    )
}

export default Gallery

import React, { useRef, useState } from 'react'

const ProfilePhotoSelector = ({iamge, setImage}) => {
    const inputRef = useRef(null);
    const [previewUrl, setPreviewUrl] = useState(null);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setImage(file);

            const preview = URL.createObjectURL(file);
            setPreviewUrl(preview);
        }
    };

  return (
    <div>ProfilePhotoSelector</div>
  )
}

export default ProfilePhotoSelector
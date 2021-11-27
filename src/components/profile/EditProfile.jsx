/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import Image from 'next/image';
import React from 'react';

function EditProfile({
  userDetails,
  closeEditMode,
  handleChange,
  handleSubmit,
  handleOnChange,
  imageSrc,
  handleCoverImageChange,
  coverImageSrc,
  letter,
}) {
  const coverImage =
    coverImageSrc ||
    'https://res.cloudinary.com/dbbunxz2o/image/upload/v1638009094/buymesomemoola/empty-rustic-wooden-table-with-blurred-christmas-lights-at-background-picture-id1041796884_ugnm12.jpg';
  return (
    <>
      <div>
        <div className="mt-5 md:mt-0 md:col-span-2">
          <form method="post" onSubmit={handleSubmit}>
            <div className="shadow sm:rounded-md sm:overflow-hidden">
              <div className="px-4 py-5 bg-white space-y-6 sm:span-6">
                <div className="w-full">
                  <label
                    htmlFor="bio"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Bio
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="bio"
                      name="bio"
                      value={userDetails.bio}
                      onChange={handleChange}
                      rows="3"
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md text-neutral resize-none"
                    />
                  </div>
                </div>

                <div>
                  <div className="relative h-40 ">
                    <Image src={coverImage} layout="fill" />
                  </div>
                  <label>
                    <span className="block text-sm font-medium text-gray-700 inline mt-2 border-2 border-solid">
                      Change Cover photo
                    </span>
                    <input
                      type="file"
                      className="hidden"
                      name="coverImage"
                      onChange={handleCoverImageChange}
                    />
                  </label>
                </div>

                <div>
                  {imageSrc ? (
                    <div className="bg-neutral-focus relative text-neutral-content rounded-full w-16 h-16">
                      <Image
                        className="rounded-full"
                        src={imageSrc}
                        layout="fill"
                      />
                    </div>
                  ) : (
                    <div className="bg-neutral-focus flex justify-center text-neutral-content rounded-full w-16 h-16">
                      <span className="text-xl self-center">{letter}</span>
                    </div>
                  )}
                  <label>
                    <span className="block text-sm font-medium text-gray-700 inline mt-2 border-2 border-solid">
                      Change profile picture
                    </span>
                    <input
                      type="file"
                      name="file"
                      className="hidden"
                      onChange={handleOnChange}
                    />
                  </label>
                </div>
              </div>

              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button
                  onClick={() => closeEditMode()}
                  type="button"
                  className="ml-2 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="ml-2 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default EditProfile;

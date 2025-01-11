// import imageCompression from 'browser-image-compression'

export const compressImage = (file: File): Promise<File> => {
  return new Promise((resolve, reject) => {
    const options = {
      maxSizeMB: 0.2, // 200KB
      maxWidthOrHeight: 900,
      useWebWorker: true,
      fileType: 'image/png',
    }

    // imageCompression(file, options).then((compressedFile) => {
    //   resolve(compressedFile)
    // })
  })
}

export async function compressFiles(files: File[]) {
  const compressPromisses = files.map(async (file) => {
    try {
      return await compressImage(file)
    } catch (error) {
      console.error(error)
      return null
    }
  })

  return (await Promise.all(compressPromisses)).filter((file) => file !== null)
}

export const getRegexPatternFromKey = (key) => {
  if (key === 'password')
    return {
      regex: '(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}',
      title: 'Password should have at least one lowercase letter, one uppercase letter, one number and one special character and should be at least 8 characters long',
    }
  if (key === 'academic_year')
    return {
      regex: '[1-4]{1}',
      title: 'Academic year should be a number between 1 and 4',
    }
  if (key === 'phone')
    return {
      regex: '[0-9 ]{9,}',
      title: 'Phone number must contain at least 9 digits',
    }
  return {}
}

export const downloadFile = (url) => {
  fetch(url).then((response) => {
    response.blob().then((blob) => {
      const blobUrl = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = blobUrl
      a.download = decodeURIComponent(url).split('/').pop()?.split('?')[0]
      a.click()
    })
  })
}

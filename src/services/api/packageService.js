import packagesData from '@/services/mockData/packages.json'

// Simulate API delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

export const getPackages = async () => {
  await delay(350)
  return [...packagesData]
}

export const getPackageById = async (id) => {
  await delay(200)
  const package = packagesData.find(p => p.Id === parseInt(id))
  if (!package) {
    throw new Error('Package not found')
  }
  return { ...package }
}

export const createPackage = async (packageData) => {
  await delay(500)
  const maxId = Math.max(...packagesData.map(p => p.Id), 0)
  const newPackage = {
    ...packageData,
    Id: maxId + 1
  }
  packagesData.push(newPackage)
  return { ...newPackage }
}

export const updatePackage = async (id, packageData) => {
  await delay(400)
  const index = packagesData.findIndex(p => p.Id === parseInt(id))
  if (index === -1) {
    throw new Error('Package not found')
  }
  packagesData[index] = { ...packagesData[index], ...packageData }
  return { ...packagesData[index] }
}

export const deletePackage = async (id) => {
  await delay(300)
  const index = packagesData.findIndex(p => p.Id === parseInt(id))
  if (index === -1) {
    throw new Error('Package not found')
  }
  packagesData.splice(index, 1)
  return { success: true }
}
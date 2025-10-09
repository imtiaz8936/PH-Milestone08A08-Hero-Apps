// get
export const loadInstalledApps = () => {
    try {
        const data = localStorage.getItem('apps')
        return data ? JSON.parse(data) : []
    } catch (err) {
        console.log(err)
        return []
    }
}

// save
export const installApp = (app) => {
    const installedApps = loadInstalledApps()

    try {
        // const isDuplicate = installedApps.some(p => p.id === app.id)
        // if (isDuplicate) return alert('Already added in localStorage')
        const updatedAppsList = [...installedApps, app]
        localStorage.setItem('apps', JSON.stringify(updatedAppsList))
    } catch (err) {
        console.log(err)
    }
}

// delete
export const uninstallApp = id => {
    const installedApps = loadInstalledApps()
    try {
        const updatedAppsList = installedApps.filter(p => p.id !== id)
        localStorage.setItem('apps', JSON.stringify(updatedAppsList))
    } catch (err) {
        console.log(err)
    }
}
module.exports = {
    publishers: [
      {
        name: '@electron-forge/publisher-github',
        config: {
          repository: {
            owner: 'alexcaussades',
            name: 'ivatrac-desktop'
          },
          prerelease: false,
          draft: true
        }
      }
    ]
  }
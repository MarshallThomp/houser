module.exports = {
    getAllHouses: async (req, res) => {
        let db = req.app.get('db')
        let allHouses = await db.getHouses()
        res.status(200).send(allHouses)
    },

    addHouse: async (req, res) => {
        let db = req.app.get('db')
        const { name, address, city, state, zip } = req.body
        let newHouse = await db.addHouse( name, address, city, state, zip )
        res.status(200).send(newHouse)
    },

    deleteHouse: async (req, res) => {
        let db = req.app.get('db')
        let { id } = req.params
        let houses = await db.deleteHouse(id)
        res.status(200).send(houses)
    }
}
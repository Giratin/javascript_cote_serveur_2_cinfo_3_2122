const { Event } = require("../models/event.model");


module.exports = {
    createEvent: async (req, res) => {
        // const { title, description, dateDebut, dateFin } = req.body;
        // const event = new Event({ title, description, dateDebut, dateFin });
        
        const event = new Event({...req.body});
        await event.save();
        res.json(event);
        

    },
    getAllEvents: async (req, res) => {
        const events = await Event.find();
        res.json(events);
    },
    getEventById: async (req, res) => {
        const { id } = req.params;
        const event = await Event.findById(id);
        res.json(event);
    },
    deleteEvent: async (req, res) => {
        const { id } = req.params;
        //await Event.remove({ _id : id });
        const event = await Event.findByIdAndRemove(id);
        if(event != null){
            return res.json({ message: "event deleted", event });
        }
        res.status(404).json({ message: "Could not be found" })
    },
    updateEvent: async (req, res) => {
        const { id } = req.params;
        const event = await Event.findByIdAndUpdate(id, {...req.body}, {new: true});
        res.json(event);
    },
}

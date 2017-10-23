
const Events = {
	registered : {},
	scrollEvent : {
		register: (evtName, callback) => {
			Events.registered[evtName] = callback;
		},
		remove:(evtName) => {
			Events.registered[evtName] = null;
		}
	}
};

module.exports = Events;
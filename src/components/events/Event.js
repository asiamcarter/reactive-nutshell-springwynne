import React, { Component } from  'react';

export default class Event extends Component {

    constructor(props) {

        super(props)

        this.state = {

            events: []
        }
    }

    render() {

        return (

            <React.Fragment>



            </React.Fragment>
        )
    }
}
/*
{
    "id": 1,
    "userId": 1,
    "eventName": "Pre-launch Party",
    "eventDate": "2019-01-15",
    "eventTime": "17:00",
    "eventLocation": "NSS"
  },
  appendUserAndFriendEvents() {
    const eventLog = document.querySelector("#eventLog");
    const eventHolder = [];
    const userHolder = [Number(sessionStorage.getItem("userId"))];
    nomadData.connectToData({
      dataSet: "friends",
      fetchType: "GET",
      dataBaseObject: "",
      embedItem: "?_embed=events"
    })
    .then(parsedResponse => {
      parsedResponse.forEach(response => {
        if(response.userId === Number(sessionStorage.getItem("userId"))) {
          userHolder.push(response.otherFriendId);
        };
      })
      userHolder.forEach(userId => {
        nomadData.connectToData({
          dataSet: "events",
          fetchType: "GET",
          dataBaseObject: "",
          embedItem: `?_userId=${userId}`
        })
        .then(parsedResponse => {
          parsedResponse.forEach(response => {
            if (response.userId === userId) {
              eventHolder.push(response);
            };
          });
          const sortedEvents = eventHolder.sort( (a, b) => {
            return new Date(a.eventDate) - new Date(b.eventDate);
          });
          const docuFrag = document.createDocumentFragment();
          sortedEvents.forEach(event => {
            while (eventLog.firstChild) {
              eventLog.removeChild(eventLog.firstChild)
            };
            const eventItem = this.createEventItem(event);
            docuFrag.appendChild(eventItem);
          });
          eventLog.appendChild(docuFrag);
        });
      });
    });
  },
    createEventItem (eventObject) {
    const eventItem = domComponents.createDomElement({elementType: "article", attributes: {class: "eventItem", id: `eventItem--${eventObject.id}`}});
    const eventHeader = domComponents.createDomElement({elementType: "h2", content: eventObject.eventName});

    const date = new Date(eventObject.eventDate);
    const datify = () => {
      const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];
      const day = date.getDate();
      const monthIndex = date.getMonth();
      const year = date.getFullYear();
      return `${monthNames[monthIndex]} ${day}, ${year}`;
    };

    const longDate = datify();

    const eventDateTime = domComponents.createDomElement({elementType: "p", content: `At ${eventObject.eventTime} on ${longDate}`});
    const eventLocation = domComponents.createDomElement({elementType: "p", content: `Location: ${eventObject.eventLocation}`});

    eventItem.appendChild(eventHeader);
    eventItem.appendChild(eventDateTime);
    eventItem.appendChild(eventLocation);

    if (eventObject.userId === Number(sessionStorage.getItem("userId"))) {
      const editButton = domComponents.createDomElement({elementType: "button", content: "Edit", attributes: {type: "button", id: `editEvent--${eventObject.id}`}});
      editButton.addEventListener("click", eventPageListeners.handleEditButton);
      const deleteButton = domComponents.createDomElement({elementType: "button", content: "Delete", attributes: {type: "button", id: `deleteEvent--${eventObject.id}`}});
      deleteButton.addEventListener("click", eventPageListeners.handleDeleteButton);
      eventItem.appendChild(editButton);
      eventItem.appendChild(deleteButton);
    } else {
      nomadData.connectToData({
        dataSet: "users",
        fetchType: "GET",
        embedItem: `/${eventObject.userId}`
        })
        .then(parsedResponse => {
        const eventUser = domComponents.createDomElement({elementType: "p", content: `Event Created By: ${parsedResponse.userName}`});
        eventItem.appendChild(eventUser);
        });
    };

    return eventItem;
  }
  */
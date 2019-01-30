const remoteURL = "http://localhost:5002"

export default {
    getById(id, dataset, embedItem) {

        return fetch(`${remoteURL}/${dataset}/${id}?${embedItem}`).then(r => r.json())
    },

    getAll(dataset, embedItem) {
        return fetch(`${remoteURL}/${dataset}?${embedItem}`).then(r=>r.json())
    },

    post(dataset, newObject) {
        return fetch (`${remoteURL}/${dataset}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newObject)
        }).then(r => r.json())
    },

    put(id, dataset, newObject) {
        return fetch (`${remoteURL}/${dataset}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newObject)
        }).then(r => r.json())
    },

    delete(id, dataset) {
        return fetch (`${remoteURL}/${dataset}/${id}`, {
            method: "DELETE"
        }).then(r => r.json())
    }
}

/**
 * You are given the structure of a class that handles basic music playlist operations. Each playlist consists of several tracks.
 * Your task is to complete the implementation of the missing methods.
 *
 * The class Track has 3 properties:
 * name - the name of the track represented as a non-empty string consisting of no more then 100 ASCII-characters.
 * duration - an integer representing the duration of the track, in seconds.
 * pausedOn - the second on which the track was paused the last time it was played.
 * You must complete the implementation of the following methods:
 *
 * play(time) - plays the track starting from moment pausedOn for time seconds.
 * If the track ends before time seconds are left,it starts over.
 * reset() - resets the track (sets pausedOn to 0).
 * The main class Playlist contains only the property trackList - the list of tracks in the playlist.
 * Note that the order of the tracks in the playlist is important.
 *
 * You must complete the implementation of the following methods:
 *
 * addTrack(name, duration) - adds a track with the given name and duration to the end of the playlist.It is guaranteed that there is no track with the given name when this method is called.
 * deleteTrack(name) - deletes the track with the given name. It is guaranteed that there is exactly 1 track with the given name in the playlist when this method is called.
 * playTrack(name, time) - plays the track with the given name for the given number of seconds. It is guaranteed that there is exactly 1 track with the given name in the playlist when this method is called.
 * resetTrack(name) - resets the track with the given name. If no name is given, this method resets all the tracks in the playlist. It is guaranteed that there is exactly 1 track with the given name (if a name is given) in the playlist when this method is called.
 * moveTrack(name, toIndex) - moves the track with the given name to the given index. Does not change the order of the other tracks in the playlist. It is guaranteed that there is exactly 1 track with the given name in the playlist when this method is called.
 * */

class Track {
    constructor(name, duration) {
        this.name = name;
        this.duration = duration;
        this.pausedOn = 0;
    }

    play(time) {
        if (time > this.duration) {
            this.pausedOn = this.pausedOn + time % this.duration
        } else {
            this.pausedOn = this.pausedOn + time
        }
    }

    reset() {
        this.pausedOn = 0;
    }

    toString() {
        return `Track(name = ${this.name}, duration = ${this.duration}, pausedOn = ${this.pausedOn})`;
    }
}

class Playlist {
    constructor() {
        this.trackList = [];
    }

    addTrack(name, duration) {
        let pos = this.trackIndexByName(name);
        if (pos === -1) {
            this.trackList.push(new Track(name, duration))
        }
    }

    deleteTrack(name) {
        let pos = this.trackIndexByName(name);
        if (pos > -1) {
            this.trackList.splice(pos, 1)
        }
    }

    playTrack(name, time) {
        let pos = this.trackIndexByName(name);
        if (pos > -1) {
            this.trackList[pos].play(time)
        }
    }

    resetTrack(name) {
        if (!name) {
            this.trackList.map(item => {
                item.reset()
            })
        } else {
            let pos = this.trackIndexByName(name)
            if (pos > -1) {
                this.trackList[pos].reset()
            }
        }
    }

    trackIndexByName(name) {
        for (let i = 0; i < this.trackList.length; i++) {
            if (this.trackList[i].name === name) {
                return i
            }
        }
        return -1;
    }

    moveTrack(name, toIndex) {
        const index = this.trackIndexByName(name);
        if (index === toIndex) {
            return;
        }
        this.trackList[toIndex] = this.trackList.splice(index, 1)
    }

    toString() {
        return '[' + this.trackList.map(track => track.toString()).join(', ') + ']';
    }
}

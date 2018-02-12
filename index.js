const Time = function(timeString) {
    this.DELIMITER = ':'
    this.parse(timeString)
}

Time.prototype.parse = function(timeString) {
    if (!timeString) {
        throw new Error('time string is null: ' + timeString)
    }

    var delimiterIndex = timeString.indexOf(this.DELIMITER)
    var hour = timeString.substring(0, delimiterIndex)
    var minute = timeString.substring(delimiterIndex + 1, timeString.length)

    this.hour = parseInt(hour)
    this.minute = parseInt(minute)
}

Time.prototype.compare = function(other) {
    if (this.hour == other.hour) {
        if (this.minute == other.minute) {
            return 0
        }
        if (this.minute > other.minute) {
            return 1
        } else {
            return -1
        }
    }
    if (this.hour > other.hour) {
        return 1
    } else {
        return -1
    }
}

Time.prototype.minus = function(other) {
    var otherHour = other.hour
    otherHour = otherHour + other.minute / 60

    var myHour = this.hour
    myHour = myHour + this.minute / 60

    var distanceInHour = myHour - otherHour
    return distanceInHour
}

module.exports = Time

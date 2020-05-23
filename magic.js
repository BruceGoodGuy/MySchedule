$(document).ready(function() {
    var outputDate = $('.output-date'),
        salonSetting = {
            time: [{
                    date: '05/22/2020',
                    startTime: '8:00',
                    endTime: '16:00',
                    timeDetail: [
                        { timeStart: '8:00', timeEnd: '8:30', availableStlot: 4, currentSlot: 1 },
                        { timeStart: '8:30', timeEnd: '9:00', availableStlot: 4, currentSlot: 1 },
                        { timeStart: '9:00', timeEnd: '9:30', availableStlot: 4, currentSlot: 1 },
                        { timeStart: '9:30', timeEnd: '10:00', availableStlot: 4, currentSlot: 1 },
                        { timeStart: '10:00', timeEnd: '10:30', availableStlot: 4, currentSlot: 1 },
                        { timeStart: '10:30', timeEnd: '11:00', availableStlot: 4, currentSlot: 1 },
                        { timeStart: '11:00', timeEnd: '11:30', availableStlot: 4, currentSlot: 1 },
                        { timeStart: '11:30', timeEnd: '12:00', availableStlot: 4, currentSlot: 1 },
                        { timeStart: '12:00', timeEnd: '12:30', availableStlot: 4, currentSlot: 1 },
                        { timeStart: '12:30', timeEnd: '13:00', availableStlot: 4, currentSlot: 1 },
                        { timeStart: '13:00', timeEnd: '13:30', availableStlot: 4, currentSlot: 1 },
                        { timeStart: '13:30', timeEnd: '14:00', availableStlot: 4, currentSlot: 1 },
                        { timeStart: '14:00', timeEnd: '14:30', availableStlot: 4, currentSlot: 1 },
                        { timeStart: '14:30', timeEnd: '15:00', availableStlot: 4, currentSlot: 1 },
                        { timeStart: '15:00', timeEnd: '15:30', availableStlot: 4, currentSlot: 1 },
                        { timeStart: '15:30', timeEnd: '16:00', availableStlot: 4, currentSlot: 1 }
                    ]
                },
                {
                    date: '05/23/2020',
                    startTime: '9:00',
                    endTime: '17:00',
                    timeDetail: [
                        { timeStart: '9:00', timeEnd: '9:30', availableStlot: 4, currentSlot: 1 },
                        { timeStart: '9:30', timeEnd: '10:00', availableStlot: 4, currentSlot: 1 },
                        { timeStart: '10:00', timeEnd: '10:30', availableStlot: 4, currentSlot: 1 },
                        { timeStart: '10:30', timeEnd: '11:00', availableStlot: 4, currentSlot: 1 },
                        { timeStart: '11:00', timeEnd: '11:30', availableStlot: 4, currentSlot: 1 },
                        { timeStart: '11:30', timeEnd: '12:00', availableStlot: 4, currentSlot: 1 },
                        { timeStart: '12:00', timeEnd: '12:30', availableStlot: 4, currentSlot: 1 },
                        { timeStart: '12:30', timeEnd: '13:00', availableStlot: 4, currentSlot: 1 },
                        { timeStart: '13:00', timeEnd: '13:30', availableStlot: 4, currentSlot: 1 },
                        { timeStart: '13:30', timeEnd: '14:00', availableStlot: 4, currentSlot: 1 },
                        { timeStart: '14:00', timeEnd: '14:30', availableStlot: 4, currentSlot: 1 },
                        { timeStart: '14:30', timeEnd: '15:00', availableStlot: 4, currentSlot: 1 },
                        { timeStart: '15:00', timeEnd: '15:30', availableStlot: 4, currentSlot: 1 },
                        { timeStart: '15:30', timeEnd: '16:00', availableStlot: 4, currentSlot: 1 },
                        { timeStart: '16:00', timeEnd: '16:30', availableStlot: 4, currentSlot: 1 },
                        { timeStart: '16:30', timeEnd: '17:00', availableStlot: 4, currentSlot: 1 }
                    ]
                },
                {
                    date: '05/24/2020',
                    startTime: '6:00',
                    endTime: '12:00',
                    timeDetail: [
                        { timeStart: '6:00', timeEnd: '6:30', availableStlot: 4, currentSlot: 1 },
                        { timeStart: '6:30', timeEnd: '7:00', availableStlot: 4, currentSlot: 1 },
                        { timeStart: '7:00', timeEnd: '7:30', availableStlot: 4, currentSlot: 1 },
                        { timeStart: '7:30', timeEnd: '8:00', availableStlot: 4, currentSlot: 1 },
                        { timeStart: '8:00', timeEnd: '8:30', availableStlot: 4, currentSlot: 1 },
                        { timeStart: '8:30', timeEnd: '9:00', availableStlot: 4, currentSlot: 1 },
                        { timeStart: '9:00', timeEnd: '9:30', availableStlot: 4, currentSlot: 1 },
                        { timeStart: '9:30', timeEnd: '10:00', availableStlot: 4, currentSlot: 1 },
                        { timeStart: '10:00', timeEnd: '10:30', availableStlot: 4, currentSlot: 1 },
                        { timeStart: '10:30', timeEnd: '11:00', availableStlot: 4, currentSlot: 1 },
                        { timeStart: '11:00', timeEnd: '11:30', availableStlot: 4, currentSlot: 1 },
                        { timeStart: '11:30', timeEnd: '12:00', availableStlot: 4, currentSlot: 1 }
                    ]
                }
            ]
        },
        date = dateTime(),
        objDate = {
            future: function() {
                date = moment(date).add(1, 'days');
                return date;
            },
            past: function() {
                date = moment(date).subtract(1, 'days')
                return date;
            }
        };

    outputDate.html(date.format('MM/DD/YYYY'));
    loadSchedule(date, salonSetting)

    // handle click calendar icon
    $("#datepicker").on("click", function() {
        $(this).datepicker({
            autoHide: true,
            language: 'jpn-ja',
            pick: function(e) {
                e.preventDefault();
                date = dateTime(e.date);
                outputDate.html(date.format('MM/DD/YYYY'))
                return;
            }
        });
    });

    // handle change date
    $(".action-change-date").on("click", function() {
        var action = $(this).attr("data-action");
        outputDate.html(objDate[action]().format('MM/DD/YYYY'))
        loadSchedule(date, salonSetting)
    })
})

function dateTime(time) {
    if (time === '') {
        return moment();
    } else {
        return moment(time);
    }
}

function loadSchedule(date, salonSetting) {
    // use lodash lib to use find function (suport IE11)
    var currentDateData = _.find(salonSetting.time, ['date', date.format('MM/DD/YYYY')]),
        timeslotTemplate = '';
    if (currentDateData !== undefined) {
        timeslotTemplate = genereateAvailableSlot(currentDateData);
    }
    $("#time-slot").html(timeslotTemplate);
}

function genereateAvailableSlot(currentDateData) {

    // get date start and date end => parse to number
    var startTime = Number(currentDateData.startTime.split(":")[0]),
        endTime = Number(currentDateData.endTime.split(":")[0]);
    var template = "";

    // render template for time slot
    for (var i = startTime; i <= endTime; i++) {
        template += "<div class='w-150 text-center' data-time='" + i + ":00'>" + i + ":00</div>";
    }
    return template;
}
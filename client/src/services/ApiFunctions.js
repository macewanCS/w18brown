import Api from '@/services/Api';

/*
A POST request is a request used when you are sending parameters or 
information to the backend and also requesting a response from the back-end.
A GET Request is a request used when you are asking the backend to give 
you information, without sending any parameters, just that you want to get information.
*/
export default {
    async getSettings() {
        return Api().get("getSettings");
    },
    async setSettings(currentSettings) {
        return Api().post("setSettings", currentSettings);
    },
    async getRooms() {
        return Api().get("roomDict");
    },
    async B_RoomList() {
        return Api().get("roomList");
    },
    async getReservations(in_room, in_startDate) {
        var reservationParam = {
            room: in_room,
            startDate: in_startDate
        }
        return Api().post("getReservations", reservationParam);
    },
    async getFacilitators(familyID) {
        if (familyID) {
            var params = {
                accountID: familyID
            }
            return Api().post("getFacilitators", params);
        } else {
            throw "No AccountID in store";
        }
    },
    async createReservation(param) {
        return Api().post("createReservation", param);
    },
    /* // this doesnt exist.
        async createEmployee (info) {
            return Api().post('createEmployee', info)
        },*/
    async createEmployeeCheck(employeeCheckResult) {
        return Api().post('createEmployeeCheck', employeeCheckResult);
    },
    async createEmployeeConfirm(employeeAddedBool) {
        return Api().post('createEmployeeConfirm', employeeAddedBool);
    },
    async deleteEmployee(deleteUser) {
        return Api().post('deleteEmployee', deleteUser);
    },
    async getRoomList() {
        return Api().get("getRoomList");
    },
    async addRoom(deleteRoom) {
        return Api().post('addRoom', deleteRoom);
    },
    async deleteRoom(roomIn) {
        return Api().post('deleteRoom', roomIn);
    },
    async accountExists(userExists) {
        return Api().post('accountExists', userExists);
    },
    async changePassword(changeData) {
        console.log("ApiFunction changePassword data: ", changeData)
        return Api().post('changePassword', changeData);
    },
  
    async getFamilyList() {
        return await Api().get("getFamilyList");
    },
    
    async getFacilitators(accountId) {
        var data = {};
        data.pack = accountId;
        return await Api().post("getFacilitators", data);
    },
    
    async getStudents(accountId) {
        var data = {};
        data.pack = accountId;
        return await Api().post("getStudents", data);
    },

    async getChildList() {
        return await Api().get("getChildList");
    },

    async getFamilybyID(accountId) {
        var data = {};
        data.pack = accountId;
        return await Api().post("getFamilybyID", data);
    },

    async deleteChildbyID(accountId, first, last) {
        var data = {};
        data.id = accountId;
        data.first = first;
        data.last = last;
        var pack = {};
        pack.pack = JSON.stringify(data);
        return await Api().post("deleteChildbyID", pack);
    },

    async requiredMinutesWeekly(accountINhours) {
     //   console.log("in apifunctions.js")
     //   console.log("ApiFunction requiredMinutesWeekly data: ", accountINhours)
        return Api().post('requiredMinutesWeekly', accountINhours);
    },

    async checkCreateFamily(familyCheckResult) {
        return Api().post('checkCreateFamily', familyCheckResult);
    },

    async confirmCreateFamily(formSubmit) {
        var data = {};
        data.pack = formSubmit;
        return Api().post('confirmCreateFamily', data);
    },

    async updateChild(formSubmit) {
        var data = {};
        data.pack = formSubmit;
        return Api().post('updateChild', data);
    },

    async updateAccount(formSubmit) {
        var data = {};
        data.pack = formSubmit;
        return Api().post('updateAccount', data);
    },


    /*
        Functions linked in advance.
        These can be used in the server side app.js file and in the client side vue files.
    */


    /* async addEditRoom(info1) { // this addEditRoom function matches to frontend
        return Api().post('addEditRoom', info1) // this addEditRoom string matches the same on on the backend
    }, */
    async checkName(info2) {
        return Api().post('checkName', info2)
    },
    /*   async finalRoomUpdate(info3) {
          return Api().post('finalRoomUpdate', info3)
      }, */
    /*async getFamilyList(info4) {
        return Api().post('getFamilyList', info4)
    },*/
    async getEmployeeList(employeeList) {
        return Api().get('getEmployeeList')
    },
    async getReservationByFamily(ID) {
        if (ID) {
            var params = {
                familyID: ID
            }
            return Api().post("getReservationByFamily", params);
        } else {
            throw "No AccountID in store";
        }
    },

    async cancelReservation(reserveID) {
        if (reserveID) {
            return Api().post("cancelReservation", reserveID);
        } else {
            throw "No reserveID provided";
        }
    },
    async getReservationInfoByID(id) {
        if (id) {
            var params = {
                reserveID: id
            }
            return Api().post("getReservationByID", params);
        } else {
            throw "No Reservation ID provided.";
        }
    },


    async createFieldTrip(params) {
        return Api().post("createFieldTrip", params);
    },


    async getEarnedMinutesByWeek(accountDay) {
        console.log("getEarnedMinutesByWeek in apifunctions")
        return Api().post("getEarnedMinutesByWeek", accountDay);
    }


    
    
    /* 
        backend functions not yet linked
	connect,
	getTypes,
	createJSON
    */
}
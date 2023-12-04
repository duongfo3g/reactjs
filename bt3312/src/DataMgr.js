class DataMgr {
	userList = []
	addUser = function(user) {
		console.log(this.userList)

		let data = JSON.stringifly(this.userList)

		localStorage.setItem('userList', data)
	}

	loadData = function() {
		let data = localStorage.getItem('userList')
		if(data == null || data == "") {
			return
		}

		this.userList = JSON.parse(data)
	}
}

const dataMgr = new DataMgr()
export default dataMgr; 
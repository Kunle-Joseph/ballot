const api = {
  getBallotData() {
    return fetch('/api/getBallotData').then(res => {
      return res.json();
    });
  },
  test(){
    console.log("test function called");
  }
};

export default api;
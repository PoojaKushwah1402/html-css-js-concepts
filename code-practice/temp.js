const getWithCallBackUser = () => {
    // $.ajax({
    // type: "",
    // url: "sdfsdfsdfsdf",
    // error: (d) => errorCb(d),
    // success: (s) => successCb(s)
    // })
    setTimeout(() => {
    resolve("vineet");
    }, 0);
    };
    
    const welcomeWithCallBack = () => {
    getWithCallBackUser(
    (successData) => {
    console.log("welcom", successData);
    getUserDetails(successData, (data) => {
    //
    }, () => {
    
    })
    },
    (errorData) => {}
    );
    };
    
    const getUserWithPromise = () => {
    // $.ajax({
    // type: "",
    // url: "sdfsdfsdfsdf",
    // error: (d) => errorCb(d),
    // success: (s) => successCb(s)
    // })
    return new Promise((resolve, reject) => {
    setTimeout(() => {
    resolve("vineet");
    }, 0);
    })
    };
    
    callbackHell
    () => {
    () => {
    () => {
    
    }
    }
    }
    
    Prmoise
    () => {
    }
    () => {
    }
    () => {
    
    }
    
    
    
    
    
    const welcomeWithPromise = () => {
    return getUserWithPromise().then((data) => {
    console.log("welcom", successData);
    return getUserDetails(successData);
    // getUserDetails(successData, (data) => {
    // //
    // }, () => {
    
    // })
    }).
    then((userDetails) => {
    return 10;
    }).catch((data) => {
    return "error"
    })
    // getUserWithPromise(
    // (successData) => {
    // console.log("welcom", successData);
    // getUserDetails(successData, (data) => {
    // //
    // }, () => {
    
    // })
    // },
    // (errorData) => {}
    // );
    };
    
    
    welcomeWithPromise.then((data) => console.log(data), (error) => {})
    
    welcome();
    undefined;
    
    
    
    
    //async await
    
    
    
    
    const getUserWithPromise = () => {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
    resolve("vineet");
    }, 0);
    })
    };
    
    const welcomeWithPromise = new Promise((resolve, reject) => {
    try {
    const data = getUserWithPromise().then;
    const userInformation = await getUserDetails(data);
    } catch (e) {
    
    }
    //resolve
    })
    
    
    const welcomeWithPromise = async () => {
    let userInformation;
    try {
    const data = await getUserWithPromise();
    userInformation = await getUserDetails(data);
    } catch (e) {
    
    }
    return userInformation;
    };
    
    welcomeWithPromise().then((data) => console.log(data), (error) => {})
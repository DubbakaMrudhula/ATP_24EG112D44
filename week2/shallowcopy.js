 // Create a new object updatedUser
                              
                              //Copy all properties from user
                              let user = {
                                  name: "Ravi",
                                  city: "Hyderabad"
                                };
                        let newUser=structuredClone(user);
                      // -> Add a new property age: 25
                        user={name:"ravi",city:"hyd",age:25};
                        //Print both objects
                        console.log(user);
                        console.log(newUser);
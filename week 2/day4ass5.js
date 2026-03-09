 const user = {
                id: 101,
                name: "Ravi",
                preferences: {
                  theme: "dark",
                  language: "en"
                }
              };
              let newuser={...user};
             
              newuser.preferences.theme="bright";
              console.log(user);
              console.log(newuser);

              const order = {
                  orderId: "ORD1001",
                  customer: {
                    name: "Anita",
                    address: {
                      city: "Hyderabad",
                      pincode: 500085
                    }
                  },
                  items: [
                    { product: "Laptop", price: 70000 }
                  ]
                };
                copyorder=structuredClone(order);
                copyorder.customer.address.city="nalgonda";
                 copyorder.items[0].price=900000;
                 console.log(order);
                 console.log(copyorder);
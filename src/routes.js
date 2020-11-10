/*!

=========================================================
* Argon Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Index from "views/Index.js";
import Profile from "views/examples/Profile.js";
import AddStores from "views/examples/AddStores.js";
import Product from "views/examples/Product.js";
import Icons from "views/examples/Icons.js";
import EditprodDetails from "views/examples/EditprodDetails/";
import Addpromo from "views/examples/Addpromo";
import Editpromo from "views/examples/EditPromo";
import Createproduct from "views/examples/Createproduct";
import Addstorecategory from "views/examples/Addstorecategory";
import Editstorecategory from "views/examples/Editstorecategory";
import Editstores from "views/examples/Editstores";
import Editprofile from "views/examples/Editprofile";
import Editproductcategory from "views/examples/Editproductcategory";
import ProductCategory from "views/examples/ProductCategory";
import Stores from "views/examples/Stores";
import StoreCategory from "views/examples/StoreCategory";
import Promotion from "views/examples/Promotion";
import FAQs from "views/examples/FAQs";
import Orders from "views/examples/Orders";
var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin"
  },
  {
    path: "/user-profile",
    name: "Users",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/admin"
  },
  {
    path: "/Product",
    name: "Product",
    icon: "ni ni-bullet-list-67 text-red",
    component: Product,
    layout: "/admin"
  },
 
  {
    path: "/ProductCategory",
    name: "ProductCategory",
    icon: "ni ni-bullet-list-67 text-red",
    component: ProductCategory,
    layout: "/admin"
  },
  {
    path: "/Stores",
    name: "Stores",
    icon: "ni ni-bullet-list-67 text-red",
    component: Stores,
    layout: "/admin"
  },

  {
    path: "/StoreCategory",
    name: "StoreCategory",
    icon: "ni ni-bullet-list-67 text-red",
    component: StoreCategory,
    layout: "/admin"
  },

  {
    path: "/Promotion",
    name: "Promotion",
    icon: "ni ni-bullet-list-67 text-red",
    component: Promotion,
    layout: "/admin"
  },

  {
    path: "/Orders",
    name: "Orders",
    icon: "ni ni-bullet-list-67 text-red",
    component: Orders,
    layout: "/admin"
  },

  {
    path: "/FAQs",
    name: "FAQs",
    icon: "ni ni-bullet-list-67 text-red",
    component: FAQs,
    layout: "/admin"
  },

  {
    path: "/icons",
    name: "Products-category",
    icon: "ni ni-planet text-blue",
    component: Icons,
    layout: "/admin"
  },

  {
    path: "/Createproduct",
    name: "Create-ProductDetails",
    icon: "ni ni-planet text-blue",
    component: Createproduct,
    layout: "/admin"
  },
  {
    path: "/EditprodDetails",
    name: "Edit-ProductDetails",
    icon: "ni ni-planet text-blue",
    component: EditprodDetails,
    layout: "/admin"
  },
  {
    path: "/Editproductcategory",
    name: "Edit-ProductCategory",
    icon: "ni ni-planet text-blue",
    component: Editproductcategory,
    layout: "/admin"
  },
  {
    path: "/AddStores",
    name: "Add Stores",
    icon: "ni ni-pin-3 text-orange",
    component: AddStores,
    layout: "/admin"
  },
  {
    path: "/Editstores",
    name: "Edit Stores",
    icon: "ni ni-pin-3 text-orange",
    component: Editstores,
    layout: "/admin"
  },
  {
    path: "/Addstorecategory",
    name: "Add Store Category",
    icon: "ni ni-pin-3 text-orange",
    component: Addstorecategory,
    layout: "/admin"
  },
  {
    path: "/Editstorecategory",
    name: "Edit Store Category",
    icon: "ni ni-pin-3 text-orange",
    component: Editstorecategory,
    layout: "/admin"
  },

  


 
  {
    path: "/Addpromo",
    name: "Addpromo",
    icon: "ni ni-circle-08 text-pink",
    component: Addpromo,
    layout: "/admin"
  },
  {
    path: "/Editpromo",
    name: "Editpromo",
    icon: "ni ni-circle-08 text-pink",
    component: Editpromo,
    layout: "/admin"
  },
  {
    path: "/Editprofile",
    name: "Edit Profile",
    icon: "ni ni-circle-08 text-pink",
    component: Editprofile,
    layout: "/admin"
  },
 
 
];
export default routes;

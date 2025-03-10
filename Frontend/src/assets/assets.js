import logo from './CF_Logo.jpeg';
import font from './CF_Font.png';
import cake_logo from './Cake_Logo.png';
import search_icon from './Search_Icon.png';
import cart from './Cart.png';
import cake_ingredients from './Cake_Ingredients.png';
import cake_tools from './Cake_Tools.png';
import party_items from './Party_Items.png';
import dum_icing_sugar from './Dum_Icing_Sugar.png';
import test_img from './menu_4.png';
import star_rate from './Rating.svg';
import silicone_spatula from './silicone_spatula.png';
import hbd_banner from './HBD_Banner.png';
import header from './header.png';
import add_icon_white from './add_icon_white.svg';
import add_icon_green from './add_icon_green.svg';
import remove_icon from './remove_icon_red.svg';
import facebook from './Facebook.svg';
import whatsapp from './WhatsApp.svg';
import location from './Location.svg';
import cross_icon from './cross_icon.svg';

const assets = {
    logo,
    font,
    cake_logo,
    search_icon,
    cart,
    cake_ingredients,
    cake_tools,     
    party_items,
    dum_icing_sugar,
    test_img,
    star_rate,
    silicone_spatula,
    hbd_banner,
    header,
    add_icon_white,
    add_icon_green,
    remove_icon,
    facebook,
    whatsapp,
    location,
    cross_icon
};

export const category_list = [
    {
        category: "Cake Ingredients",
        category_image: test_img
    },
    {
        category: "Cake Tools",
        category_image: test_img
    },
    {
        category: "Party Items",
        category_image: test_img
    }
]

export const item_list = [
    {
        _id: "1",
        name: "Dum Icing Sugar",
        image: dum_icing_sugar,
        price: 100,
        description: "",
        category: "Cake Ingredients",
        // rating: 3
    },
    {
        _id: "2",
        name: "Silcone Spatula",
        image: silicone_spatula,
        price: 100,
        description: "",
        category: "Cake Tools",
    },
    {
        _id: "3",
        name: "Happy Birthday Banner",
        image: hbd_banner,
        price: 100,
        description: "",
        category: "Party Items",
    }
]

export default assets;
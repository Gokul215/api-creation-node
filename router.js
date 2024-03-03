import { Router } from "express";
import apischemas from "./apischema.js";
import {data} from "./data.js";
const router = Router();
console.log(data.allItems);
router.route("/post") .post( async(req,res)=>{
   
                try {
                    const result = await apischemas.create({items: data.allItems});

                    res.json({ msg: "Data Saved Successfully...!", data: result });
                } catch (error) {
                    res.status(500).json({ error: error.message });
                }

            })



router.route('/get') .get(  async(req,res)=>{ try {
        const q = await apischemas.find();
        res.json(q)
    } catch (error) {
        res.json({ error })
    }
    })

    export default router;
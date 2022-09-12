import { motion }  from "framer-motion";
import Logo from "../../../assets/pf.jpg";
export default function PfBox() {
  return (
    <div className="w-4/5 max-w-[300px] max-h-[350px] md:w-full h-[350px] md:h-3/4 relative border-box my-auto mx-auto overflow-visible">
    <div className='flex items-center flex-col justify-center w-full h-full bg-[#ffe714]  bg-opacity-10 rounded-tr-[30px] rounded-bl-[100px] border-[#00000000] border-opacity-40 border-2 text-white rounded-full'>
        <img src={Logo} className="w-32 h-32 md:w-40 md:h-40 rounded-full border-white border-2 shadow-md shadow-[#666666]"/>
        <p className="text-center mt-4 font-bold">Yan Naing Htun</p>
        <p className="text-center text-sm text-[#b69eff]">(Kishan)</p>
    </div>

    <motion.div className="w-full h-4/5 rounded-full absolute top-0 left-0 right-0 " initial={{ rotate: 0}}
        animate={{ rotate:360}}
        transition={{ duration: 5.5 , repeatType: "loop",repeat:Infinity}} >
    <motion.div initial={{ roate: 360}}
        animate={{ rotate: 0 }}
        transition={{ duration: 5.5 , repeatType: "loop",repeat:Infinity}}  className={`w-12 h-12 flex items-center justify-center absolute top-[-20px] right-[-10px] m-auto rounded-full border-2 border-orange-500 bg-orange-900 text-white text-xs`}>
        Java
    </motion.div>    
    </motion.div>



    <motion.div className="w-full h-4/5 rounded-full absolute top-0 left-0 right-0 " initial={{ rotate: 0}}
        animate={{ rotate:360}}
        transition={{ duration: 7.0 , repeatType: "loop",repeat:Infinity}} >
    <motion.div initial={{ rotate: 360}}
        animate={{ rotate:0}}
        transition={{ duration: 7.0 , repeatType: "loop",repeat:Infinity}}  className={`w-12 h-12 flex items-center justify-center absolute top-[-20px] right-[-10px] m-auto rounded-full border-2 border-purple-500 bg-purple-900 text-white text-xs`}>
        Kotlin
    </motion.div>
    </motion.div>


    

    <motion.div className="w-full h-4/5 rounded-full absolute top-0 left-0 right-0 " initial={{ rotate: 0}}
        animate={{ rotate:360}}
        transition={{ duration: 6.0 , repeatType: "loop",repeat:Infinity}} >
    
    <motion.div initial={{ rotate: 360 }}
        animate={{ rotate: 0}}
        transition={{ duration: 6.0 , repeatType: "loop",repeat:Infinity}}  className={`w-12 h-12 flex items-center justify-center absolute top-[-20px] right-[-10px] m-auto rounded-full border-2 border-green-500 bg-green-900 text-white text-xs`}>
        Docker
    </motion.div>
    </motion.div>


    <motion.div className="w-full h-4/5 rounded-full absolute top-0 left-0 right-0 " initial={{ rotate: 0}}
        animate={{ rotate:360}}
        transition={{ duration: 8.0 , repeatType: "loop",repeat:Infinity}} >
    
    <motion.div initial={{rotate: 360,top:150}}
        animate={{ rotate: 0}}
        transition={{ duration: 8.0 , repeatType: "loop",repeat:Infinity}}  className={`w-12 h-12 flex items-center justify-center absolute top-[-20px] right-[-10px] m-auto rounded-full border-2 border-orange-500 bg-orange-900 text-white text-xs`}>
        Dart
    </motion.div>
    </motion.div>


    <motion.div className="w-full h-4/5 rounded-full absolute top-0 left-0 right-0 " initial={{ rotate: 0}}
        animate={{ rotate:360}}
        transition={{ duration: 8.0 , repeatType: "loop",repeat:Infinity}} >
    
    <motion.div initial={{ rotate: 360}}
        animate={{rotate: 0}}
        transition={{ duration: 7.2 , repeatType: "loop",repeat:Infinity}}  className={`w-12 h-12 flex items-center justify-center absolute top-[-20px] right-[-10px] m-auto rounded-full border-2 border-red-500 bg-red-900 text-white text-xs`}>
        Linux
    </motion.div>
    </motion.div>



    <motion.div className="w-full h-4/5 rounded-full absolute top-0 left-0 right-0 " initial={{ rotate: 0}}
        animate={{ rotate:360}}
        transition={{ duration: 8.0 , repeatType: "loop",repeat:Infinity}} >
    

    <motion.div initial={{rotate: 0,left: 10}}
        animate={{ rotate: 360}}
        transition={{ duration: 8.0 , repeatType: "loop",repeat:Infinity}}  className={`w-14 h-14 flex items-center justify-center absolute top-[-20px] right-[-10px] m-auto rounded-full border-2 border-yellow-500 bg-yellow-900 text-white text-xs`}>
        Compiler
    </motion.div>
    </motion.div>




    <motion.div className="w-full h-4/5 rounded-full absolute top-0 left-0 right-0 " initial={{ rotate: 0}}
        animate={{ rotate:360}}
        transition={{ duration: 8.0 , repeatType: "loop",repeat:Infinity}} >
    
    <motion.div initial={{ rotate: 0 }}
        animate={{ rotate: 360}}
        transition={{ duration: 5.7 , repeatType: "loop",repeat:Infinity}}  className={`w-12 h-12 flex items-center justify-center absolute top-[-20px] right-[-10px] m-auto rounded-full border-2 border-black bg-black text-white text-xs`}>
        Shell
    </motion.div>
    </motion.div>




    <motion.div className="w-full h-4/5 rounded-full absolute top-0 left-0 right-0 " initial={{ rotate: 0}}
        animate={{ rotate:360}}
        transition={{ duration: 5.0 , repeatType: "loop",repeat:Infinity}} >
    
    <motion.div initial={{rotate: 0 }}
        animate={{rotate: 360}}
        transition={{ duration: 5.2 , repeatType: "loop",repeat:Infinity}}  className={`w-12 h-12 flex items-center justify-center absolute top-[-20px] right-[-10px] m-auto rounded-full border-2 border-yellow-500 bg-yellow-900 text-white text-xs`}>
        JS
    </motion.div>
    </motion.div>



    <motion.div className="w-full h-4/5 rounded-full absolute top-0 left-0 right-0 " initial={{ rotate: 0}}
        animate={{ rotate:360}}
        transition={{ duration: 6.0 , repeatType: "loop",repeat:Infinity}} >
    
    <motion.div initial={{ rotate: 0 ,bottom: 20}}
        animate={{rotate: 360}}
        transition={{ duration:4.0 , repeatType: "loop",repeat:Infinity}}  className={`w-14 h-14 flex items-center justify-center absolute top-[-20px] right-[-10px] m-auto rounded-full border-2 border-orange-500 bg-orange-900 text-white text-xs`}>
        Python
    </motion.div>
    </motion.div>



    <motion.div initial={{ opacity: 0.5, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 , repeatType: "reverse",repeat:Infinity}}  className={`w-14 h-14 flex items-center justify-center absolute top-[20px] right-[-20px] m-auto rounded-full border-2 bg-blue-500 border-blue-500 text-white text-xs`}>
        Flutter
    </motion.div>
    <motion.div initial={{ opacity: 0.5, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 , repeatType: "reverse",repeat:Infinity}}  className={`w-14 h-14 flex items-center justify-center absolute top-[30px] left-[-20px] m-auto rounded-full border-2 bg-purple-500 border-purple-500 text-white text-xs`}>
        React
    </motion.div>
    <motion.div initial={{ opacity: 0.5, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 , repeatType: "reverse",repeat:Infinity}}  className={`w-20 h-20 flex items-center justify-center absolute bottom-[0px] md:bottom-[-20px] right-[40px] m-auto rounded-full border-2 bg-yellow-500 border-yellow-500 text-white text-xs`}>
        DevOps
    </motion.div>
    </div>
  );
}
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"

export default function NotFoundPage() {
    return (
        <section className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden px-6">
            {/* Background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] max-w-[800px] aspect-square bg-alt-blue/10 dark:bg-alt-blue/5 rounded-full blur-[100px] pointer-events-none" />
            
            <div className="relative z-10 flex flex-col items-center text-center mt-20">
                <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
                    className="relative"
                >
                    <h1 className="text-[120px] md:text-[200px] lg:text-[250px] font-black text-alt-blue/10 dark:text-alt-blue/5 leading-none select-none">
                        404
                    </h1>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-alt-slate dark:text-white">
                            Oups !
                        </span>
                    </div>
                </motion.div>
                
                <motion.p 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 mt-6 max-w-lg"
                >
                    La page que vous cherchez semble s'être évaporée ou n'a jamais existé.
                </motion.p>
                
                <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="mt-12"
                >
                    <Link 
                        to="/" 
                        className="group flex items-center gap-3 px-8 py-4 bg-alt-blue text-white rounded-full font-medium hover:bg-alt-slate dark:hover:bg-white dark:hover:text-alt-slate transition-all duration-300 shadow-xl shadow-alt-blue/20"
                    >
                        <ArrowLeft size={20} className="group-hover:-translate-x-2 transition-transform" />
                        Retour à l'accueil
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}

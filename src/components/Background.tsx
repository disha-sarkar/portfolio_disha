import { motion } from "framer-motion";

const Background = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">

      {/* Pink Blob */}
      <motion.div
        animate={{
          x: [0, 100, -100, 0],
          y: [0, -80, 80, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-20 left-20 w-[500px] h-[500px]
                   bg-pink-500/30 blur-3xl rounded-full"
      />

      {/* Purple Blob */}
      <motion.div
        animate={{
          x: [0, -120, 120, 0],
          y: [0, 100, -100, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-20 right-20 w-[500px] h-[500px]
                   bg-purple-500/30 blur-3xl rounded-full"
      />

      {/* Optional subtle grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
    </div>
  );
};

export default Background;

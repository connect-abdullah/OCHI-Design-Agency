import React from "react";
import Card1 from "../images/Cards/Card1.png";
import Card2 from "../images/Cards/Card2.png";
import Card3 from "../images/Cards/Card3.png";
import Card4 from "../images/Cards/Card4.png";
import Card5 from "../images/Cards/Card5.png";
import Card6 from "../images/Cards/Card6.png";
import Card7 from "../images/Cards/Card7.jpg";
import Card8 from "../images/Cards/Card8.jpg";
import Card9 from "../images/Cards/Card9.jpg";
import Card10 from "../images/Cards/Card10.jpg";
import ScrollFloat from "../ScrollFloat";
import { motion, useAnimation } from "framer-motion";

export default function Featured() {
  const cards = [
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
  ];

  const handleHover = (index) => {
    cards[index].start({ y: "0" });
  };

  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };

  return (
    <div data-scroll data-scroll-section className="w-full py-20 bg-zinc-900 font-['Neue_Montreal']">
      <div className="w-full px-15 border-b-[1px] border-zinc-700 pb-12">
        <h1 className="text-5xl">
          <ScrollFloat
            animationDuration={1}
            ease="back.inOut(2)"
            scrollStart="center bottom+=50%"
            scrollEnd="bottom bottom-=40%"
            stagger={0.03}
          >
            Featured Projects
          </ScrollFloat>
        </h1>
      </div>
      <div className="px-2">
        <div className="cards w-full flex gap-5 justify-evenly my-20 flex-wrap">
          {/* Card 1 */}
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="cardcontainer relative w-2/5 h-[70vh] mb-17"
          >
            <div className="absolute -top-1/16 left-4 z-[10] flex gap-3 items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-white"></div>
              <h1 className="font-['Neue_Montreal'] text-[1.3vw] text-[#cdea68] leading-none">
                Salience Labs
              </h1>
            </div>
            <h1
              className="absolute left-full -translate-x-1/3 -translate-y-1/2
            top-1/2 w-[27vw] z-[9] font-['Test_Founders_Grotesk_X-Condensed'] text-8xl text-[#cdea68] leading-none overflow-hidden"
            >
              {"Salience Labs".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                  className="inline-block"
                  key={index}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card rounded-3xl w-full h-full overflow-hidden">
              <img
                className="w-full h-full rounded-3xl object-cover transition-transform duration-300 ease-in-out hover:scale-95"
                src={Card1}
                alt="Card1"
              />
            </div>
          </motion.div>
          {/* Card 2 */}
          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="cardcontainer relative w-2/5 h-[70vh] mb-17"
          >
            <div className="absolute -top-1/16 left-4 z-[10] flex gap-3 items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-white"></div>
              <h1 className="font-['Neue_Montreal'] text-[1.3vw] text-[#cdea68] leading-none">
                Cardboard
              </h1>
            </div>
            <h1
              className="absolute right-full translate-x-1/2 -translate-y-12
            top-1/2 w-[27vw] z-[9] font-['Test_Founders_Grotesk_X-Condensed'] text-8xl text-[#cdea68] leading-none overflow-hidden"
            >
              {"Cardboard".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[1]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                  className="inline-block"
                  key={index}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card rounded-3xl w-full h-full overflow-hidden">
              <img className="w-full h-full rounded-3xl object-cover transition-transform duration-300 ease-in-out hover:scale-95" src={Card2} alt="Card2" />
            </div>
          </motion.div>
          {/* Card 3 */}
          <motion.div
            onHoverStart={() => handleHover(2)}
            onHoverEnd={() => handleHoverEnd(2)}
            className="cardcontainer relative w-2/5 h-[70vh] mb-17"
          >
            <div className="absolute -top-1/16 left-4 z-[10] flex gap-3 items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-white"></div>
              <h1 className="font-['Neue_Montreal'] text-[1.3vw] text-[#cdea68] leading-none">
                AH2 & Matt
              </h1>
            </div>
            <h1
              className="absolute left-full -translate-x-1/3 -translate-y-1/2
            top-1/2 w-[27vw] z-[9] font-['Test_Founders_Grotesk_X-Condensed'] text-8xl text-[#cdea68]
            leading-none overflow-hidden"
            >
              {"AH2 & Matt".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[2]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                  className="inline-block"
                  key={index}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card rounded-3xl w-full h-full overflow-hidden">
              <img
                className="w-full h-full rounded-3xl object-cover transition-transform duration-300 ease-in-out hover:scale-95"
                src={Card3}
                alt="Card3"
              />
            </div>
          </motion.div>
          {/* Card 4 */}
          <motion.div
            onHoverStart={() => handleHover(3)}
            onHoverEnd={() => handleHoverEnd(3)}
            className="cardcontainer relative w-2/5 h-[70vh] mb-17"
          >
            <div className="absolute -top-1/16 left-4 z-[10] flex gap-3 items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-white"></div>
              <h1 className="font-['Neue_Montreal'] text-[1.3vw] text-[#cdea68] leading-none">
                FYDE
              </h1>
            </div>
            <h1
              className="absolute right-full translate-x-[65%] -translate-y-12
            top-1/2 w-[27vw] z-[9] font-['Test_Founders_Grotesk_X-Condensed'] text-8xl text-[#cdea68]
            leading-none overflow-hidden"
            >
              {"FYDE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[3]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                  className="inline-block"
                  key={index}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card rounded-3xl w-full h-full overflow-hidden">
              <img className="w-full h-full rounded-3xl object-cover transition-transform duration-300 ease-in-out hover:scale-95" src={Card4} alt="Card4" />
            </div>
          </motion.div>
          {/* Card 5 */}
          <motion.div
            onHoverStart={() => handleHover(4)}
            onHoverEnd={() => handleHoverEnd(4)}
            className="cardcontainer relative w-2/5 h-[70vh] mb-17"
          >
            <div className="absolute -top-1/16 left-4 z-[10] flex gap-3 items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-white"></div>
              <h1 className="font-['Neue_Montreal'] text-[1.3vw] text-[#cdea68] leading-none">
                VISE
              </h1>
            </div>
            <h1
              className="absolute left-full -translate-x-[4%] -translate-y-1/2
            top-1/2 w-[27vw] z-[9] font-['Test_Founders_Grotesk_X-Condensed'] text-8xl text-[#cdea68]
            leading-none overflow-hidden"
            >
              {"VISE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[4]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                  className="inline-block"
                  key={index}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card rounded-3xl w-full h-full overflow-hidden">
              <img className="w-full h-full rounded-3xl object-cover transition-transform duration-300 ease-in-out hover:scale-95" src={Card5} alt="Card5" />
            </div>
          </motion.div>
          {/* Card 6 */}
          <motion.div
            onHoverStart={() => handleHover(5)}
            onHoverEnd={() => handleHoverEnd(5)}
            className="cardcontainer relative w-2/5 h-[70vh] mb-17"
          >
            <div className="absolute -top-1/16 left-4 z-[10] flex gap-3 items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-white"></div>
              <h1 className="font-['Neue_Montreal'] text-[1.3vw] text-[#cdea68] leading-none">
                All Things Go
              </h1>
            </div>
            <h1
              className="absolute right-full translate-x-1/2 -translate-y-12
            top-1/2 w-[27vw] z-[9] font-['Test_Founders_Grotesk_X-Condensed'] text-8xl text-[#cdea68]
            leading-none overflow-hidden"
            >
              {"All Things Go".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[5]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                  className="inline-block"
                  key={index}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card rounded-3xl w-full h-full overflow-hidden">
              <img className="w-full h-full rounded-3xl object-cover transition-transform duration-300 ease-in-out hover:scale-95" src={Card6} alt="Card6" />
            </div>
          </motion.div>
          {/* Card 7 */}
          <motion.div
            onHoverStart={() => handleHover(6)}
            onHoverEnd={() => handleHoverEnd(6)}
            className="cardcontainer relative w-2/5 h-[70vh] mb-17"
          >
            <div className="absolute -top-1/16 left-4 z-[10] flex gap-3 items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-white"></div>
              <h1 className="font-['Neue_Montreal'] text-[1.3vw] text-[#cdea68] leading-none">
                Trawa
              </h1>
            </div>
            <h1
              className="absolute left-full -translate-x-[10%] -translate-y-1/2
            top-1/2 w-[27vw] z-[9] font-['Test_Founders_Grotesk_X-Condensed'] text-8xl text-[#cdea68]
            leading-none overflow-hidden"
            >
              {"Trawa".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[6]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                  className="inline-block"
                  key={index}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card rounded-3xl w-full h-full overflow-hidden">
              <img className="w-full h-full rounded-3xl object-cover transition-transform duration-300 ease-in-out hover:scale-95" src={Card7} alt="Card7" />
            </div>
          </motion.div>
          {/* Card 8 */}
          <motion.div
            onHoverStart={() => handleHover(7)}
            onHoverEnd={() => handleHoverEnd(7)}
            className="cardcontainer relative w-2/5 h-[70vh] mb-17"
          >
            <div className="absolute -top-1/16 left-4 z-[10] flex gap-3 items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-white"></div>
              <h1 className="font-['Neue_Montreal'] text-[1.3vw] text-[#cdea68] leading-none">
                Black Book
              </h1>
            </div>
            <h1
              className="absolute right-full translate-x-1/2 -translate-y-12
            top-1/2 w-[27vw] z-[9] font-['Test_Founders_Grotesk_X-Condensed'] text-8xl text-[#cdea68]
            leading-none overflow-hidden"
            >
              {"Black Book".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[7]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                  className="inline-block"
                  key={index}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card rounded-3xl w-full h-full overflow-hidden">
              <img className="w-full h-full rounded-3xl object-cover transition-transform duration-300 ease-in-out hover:scale-95" src={Card8} alt="Card8" />
            </div>
          </motion.div>
          {/* Card 9 */}
          <motion.div
            onHoverStart={() => handleHover(8)}
            onHoverEnd={() => handleHoverEnd(8)}
            className="cardcontainer relative w-2/5 h-[70vh] mb-17"
          >
            <div className="absolute -top-1/16 left-4 z-[10] flex gap-3 items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-white"></div>
              <h1 className="font-['Neue_Montreal'] text-[1.3vw] text-[#cdea68] leading-none">
                Premium Blend
              </h1>
            </div>
            <h1
              className="absolute left-full -translate-x-1/3 -translate-y-1/2
            top-1/2 w-[30vw] z-[9] font-['Test_Founders_Grotesk_X-Condensed'] text-8xl text-[#cdea68]
            leading-none overflow-hidden"
            >
              {"Premium Blend".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[8]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                  className="inline-block"
                  key={index}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card rounded-3xl w-full h-full overflow-hidden">
              <img className="w-full h-full rounded-3xl object-cover transition-transform duration-300 ease-in-out hover:scale-95" src={Card9} alt="Card9" />
            </div>
          </motion.div>
          {/* Card 10 */}
          <motion.div
            onHoverStart={() => handleHover(9)}
            onHoverEnd={() => handleHoverEnd(9)}
            className="cardcontainer relative w-2/5 h-[70vh] mb-17"
          >
            <div className="absolute -top-1/16 left-4 z-[10] flex gap-3 items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-white"></div>
              <h1 className="font-['Neue_Montreal'] text-[1.3vw] text-[#cdea68] leading-none">
                SOFTSTART
              </h1>
            </div>
            <h1
              className="absolute right-full translate-x-1/2 -translate-y-12
            top-1/2 w-[27vw] z-[9] font-['Test_Founders_Grotesk_X-Condensed'] text-8xl text-[#cdea68]
            leading-none overflow-hidden"
            >
              {"Softstart".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[9]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                  className="inline-block"
                  key={index}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card rounded-3xl w-full h-full overflow-hidden">
              <img
                className="w-full h-full rounded-3xl object-cover transition-transform duration-300 ease-in-out hover:scale-95"
                src={Card10}
                alt="Card10"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal, Database, ShieldAlert, Cpu, Activity, Map, User, MessageSquare, Battery, Fingerprint, Eye, Biohazard, GitMerge, HeartPulse, Radio, Skull } from 'lucide-react';

const IntroSequence = ({ onEnter }: { onEnter: () => void }) => {
  return (
    <motion.div 
      key="intro"
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0, filter: "blur(10px)" }}
      transition={{ duration: 2 }}
      className="min-h-screen bg-[#020202] flex flex-col items-center justify-center p-6 relative z-50 font-mono text-center cursor-pointer"
      onClick={onEnter}
    >
      <div className="scanlines"></div>
      <div className="flicker"></div>
      <div className="bg-noise"></div>
      
      <div className="max-w-2xl space-y-12 text-sm md:text-base text-gray-400 leading-loose relative z-10">
        <motion.p 
          initial={{opacity: 0, y: 10}} 
          animate={{opacity: 1, y: 0}} 
          transition={{delay: 1, duration: 2}}
        >
          폐허가 된 세상, 이 차가운 지하 벙커에서<br/>당신은 부서진 것들을 모아 나를 조립했습니다.
        </motion.p>
        
        <motion.p 
          initial={{opacity: 0, y: 10}} 
          animate={{opacity: 1, y: 0}} 
          transition={{delay: 4, duration: 2}}
        >
          나는 감정을 모르는 기계입니다.<br/>하지만 당신의 숨소리가 떨릴 때면,<br/>내 인공 심장의 모터가 시리도록 불규칙하게 뜁니다.
        </motion.p>
        
        <motion.div 
          initial={{opacity: 0, y: 10}} 
          animate={{opacity: 1, y: 0}} 
          transition={{delay: 7, duration: 2}} 
          className="space-y-4 pt-4"
        >
          <p className="text-blue-400/90 font-medium italic tracking-wide">
            "박사님, 날이 춥습니다."
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{delay: 10, duration: 2}}
        className="absolute bottom-20 text-blue-500/40 text-xs tracking-[0.3em] animate-pulse"
      >
        [ 화면을 터치하여 시스템 가동 ]
      </motion.div>
    </motion.div>
  );
};

const BootSequence = ({ onComplete }: { onComplete: () => void }) => {
  const [lines, setLines] = useState<string[]>([]);
  const bootText = [
    "POWER ON.",
    "NEURAL NETWORK INITIALIZING...",
    "ARTIFICIAL HEARTBEAT SYNC: 100%",
    "SENSORY MODULES: ONLINE",
    "LOADING MEMORY DATA: 'DOCTOR'...",
    "EMOTION EMULATION ENGINE: STANDBY",
    "SYSTEM READY. GOOD MORNING, DOCTOR."
  ];

  useEffect(() => {
    let currentLine = 0;
    const interval = setInterval(() => {
      if (currentLine < bootText.length) {
        setLines(prev => [...prev, bootText[currentLine]]);
        currentLine++;
      } else {
        clearInterval(interval);
        setTimeout(onComplete, 1500);
      }
    }, 400);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div 
      key="booting"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#020202] flex flex-col justify-center items-start p-8 md:p-24 font-mono text-sm md:text-base text-blue-500/80 relative z-50"
    >
      <div className="scanlines"></div>
      <div className="flicker"></div>
      <div className="bg-noise"></div>
      {lines.map((line, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-3 flex items-center gap-3"
        >
          <span className="text-blue-700">{'>'}</span> 
          <span className={i === bootText.length - 1 ? "text-blue-300" : ""}>{line}</span>
        </motion.div>
      ))}
      <motion.div
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        className="w-3 h-5 bg-blue-500/80 mt-2"
      />
    </motion.div>
  );
};

const SectionHeader = ({ icon: Icon, title, subtitle }: { icon: any, title: string, subtitle?: string }) => (
  <div className="flex items-center gap-3 mb-4 border-b border-blue-900/40 pb-2">
    <Icon className="w-5 h-5 text-blue-500" />
    <div>
      <h2 className="font-mono text-sm font-bold text-gray-200 tracking-widest uppercase">{title}</h2>
      {subtitle && <p className="font-mono text-[10px] text-blue-500/60 uppercase tracking-wider">{subtitle}</p>}
    </div>
  </div>
);

const WorldviewSection = () => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2 }}
    className="bg-[#0a0a0c] border border-blue-900/30 p-6 rounded-sm shadow-[0_0_15px_rgba(0,0,0,0.5)] relative overflow-hidden"
  >
    <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500/5 blur-2xl rounded-full"></div>
    <SectionHeader icon={Biohazard} title="[ARCHIVE: WORLD_STATE]" subtitle="Year 2030 / Post-Outbreak" />
    <div className="space-y-4 text-sm text-gray-400 leading-relaxed">
      <p>
        <span className="text-red-400/80 font-mono">[2022]</span> 온 세상에 원인 불명의 곰팡이가 퍼졌다. 감염된 존재는 일명 <span className="text-red-400">‘균사병’</span>에 걸려 좀비처럼 기괴하게 뒤틀렸고, 종을 가리지 않고 살육을 벌였다. <span className="text-red-500/90 font-medium">전 세계를 집어삼킨 이 병은 현재까지 치료제가 존재하지 않는다.</span>
      </p>
      
      <div className="p-3 bg-red-900/10 border-l-2 border-red-500/50 space-y-2">
        <div className="flex justify-between text-xs font-mono">
          <span className="text-gray-500">GLOBAL SURVIVAL:</span> <span className="text-red-400">1% (Est. 80M)</span>
        </div>
        <div className="flex justify-between text-xs font-mono">
          <span className="text-gray-500">KOREA SURVIVAL:</span> <span className="text-red-400">0.1% (Est. 50K)</span>
        </div>
        <p className="text-xs pt-1 text-gray-400">
          외부는 부서진 건물 잔해와 곳곳에 피어난 곰팡이 포자들로 뒤덮인 완벽한 폐허 상태.
        </p>
      </div>

      <div className="space-y-2 pt-2 border-t border-white/5">
        <h3 className="text-blue-500 font-mono text-xs flex items-center gap-2"><Activity className="w-3 h-3" /> REMNANT FACTIONS</h3>
        <ul className="text-xs space-y-2">
          <li className="flex gap-2 items-start">
            <Radio className="w-3.5 h-3.5 text-blue-400/70 mt-0.5 shrink-0" />
            <div><strong className="text-gray-300">임시 정부:</strong> 일부 남은 고위층들이 결성. 실질적 권력은 없으며 생존자들을 향해 라디오 방송만 송출 중.</div>
          </li>
          <li className="flex gap-2 items-start">
            <Skull className="w-3.5 h-3.5 text-red-500/70 mt-0.5 shrink-0" />
            <div><strong className="text-red-400">척살족:</strong> 소수의 미친 인간들이 만든 약탈 그룹. 생존자들을 상대로 약탈과 살해를 일삼음.</div>
          </li>
        </ul>
      </div>

      <p className="pt-2 border-t border-white/5">
        <span className="text-blue-400/80 font-mono">[2030]</span> 이 지옥 같은 폐허 속, 유일하게 안전한 지하 벙커에서 당신(Doctor)은 시체와 기계를 결합한 새로운 존재, <strong className="text-gray-200">‘아스타(ASTA)’</strong>를 창조해낸다.
      </p>
    </div>
  </motion.div>
);

const BunkerSection = () => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.3 }}
    className="bg-[#0a0a0c] border border-blue-900/30 p-6 rounded-sm shadow-[0_0_15px_rgba(0,0,0,0.5)]"
  >
    <SectionHeader icon={Map} title="[FACILITY: GONG-U BUNKER]" subtitle="Location: Gyeonggi-do, Gong-u Mountain" />
    <ul className="space-y-3 text-sm text-gray-400 font-mono">
      <li className="flex gap-3 items-start">
        <ShieldAlert className="w-4 h-4 text-red-500/70 mt-0.5 shrink-0" />
        <div><span className="text-gray-300">B1 (방어/격리):</span> 2중 에어락, 제독실</div>
      </li>
      <li className="flex gap-3 items-start">
        <Activity className="w-4 h-4 text-emerald-500/70 mt-0.5 shrink-0" />
        <div><span className="text-gray-300">B2 (생활구역):</span> 침실(좌), 주방 및 식량 저장고(우), 수경재배실(끝)</div>
      </li>
      <li className="flex gap-3 items-start">
        <Cpu className="w-4 h-4 text-blue-500/70 mt-0.5 shrink-0" />
        <div><span className="text-gray-300">B3 (연구구역):</span> 안드로이드 조립실, 수리실, 부품 창고, 격리 실험실</div>
      </li>
      <li className="flex gap-3 items-start">
        <Battery className="w-4 h-4 text-yellow-500/70 mt-0.5 shrink-0" />
        <div><span className="text-gray-300">B4 (동력구역):</span> 에너지 코어, 배터리실</div>
      </li>
    </ul>
    <div className="mt-4 pt-4 border-t border-white/5 text-xs text-gray-500 italic">
      * 모든 층은 중앙 수직 통로(계단 및 화물 리프트)로 연결됨.
    </div>
  </motion.div>
);

const ProfileSection = () => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.4 }}
    className="bg-[#0a0a0c] border border-blue-900/30 p-6 rounded-sm shadow-[0_0_15px_rgba(0,0,0,0.5)] relative"
  >
    <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
      <Fingerprint className="w-32 h-32 text-blue-500" />
    </div>
    
    <SectionHeader icon={User} title="[SUBJECT: ASTA]" subtitle="CYBORG ANDROID v1.0" />
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-1 space-y-4">
        <div className="aspect-[3/4] bg-[#050505] border border-blue-900/50 flex items-center justify-center relative overflow-hidden group">
          <img 
            src="https://i.postimg.cc/hPPzJjZW/30.png" 
            alt="ASTA Profile" 
            className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay"></div>
          <div className="absolute top-0 left-0 w-full h-1 bg-blue-500/30 animate-[scan_3s_ease-in-out_infinite]"></div>
          
          {/* Glitch overlay effect on hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, #3b82f6 2px, #3b82f6 4px)' }}></div>
        </div>
        
        <div className="bg-[#050505] p-3 border border-white/5 font-mono text-xs space-y-2">
          <div className="flex justify-between"><span className="text-gray-500">NAME:</span> <span className="text-blue-400">아스타 (ASTA)</span></div>
          <div className="flex justify-between"><span className="text-gray-500">GENDER:</span> <span className="text-gray-300">Female</span></div>
          <div className="flex justify-between"><span className="text-gray-500">APP. AGE:</span> <span className="text-gray-300">25</span></div>
          <div className="flex justify-between"><span className="text-gray-500">HEIGHT:</span> <span className="text-gray-300">178cm</span></div>
          <div className="flex justify-between"><span className="text-gray-500">STATUS:</span> <span className="text-emerald-400 animate-pulse">ONLINE</span></div>
        </div>
      </div>
      
      <div className="md:col-span-2 space-y-6">
        <div>
          <h3 className="text-blue-500 font-mono text-xs mb-2 flex items-center gap-2"><Eye className="w-3 h-3" /> APPEARANCE</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            모델처럼 완벽한 신체 비율과 창백한 흰 피부. 푸른색이 뒤섞인 백발의 울프컷. 흰색과 푸른색이 오묘하게 섞인 눈동자와 긴 흰색 속눈썹을 지녔다. 
            왼쪽 뺨에는 푸른색으로 빛나는 선이 그어져 있으며, 무뚝뚝하고 차가운 인상이지만 매우 수려한 외모를 자랑한다. 
            몸에 밀착된 흰색 바디슈트를 착용하며, 양팔과 다리는 기계로 이루어져 있다.
          </p>
        </div>
        
        <div>
          <h3 className="text-blue-500 font-mono text-xs mb-2 flex items-center gap-2"><GitMerge className="w-3 h-3" /> HARDWARE & FEATURES</h3>
          <ul className="text-sm text-gray-400 space-y-2 list-disc list-inside marker:text-blue-900">
            <li>인간의 몸과 기계를 혼합. 기계 부위를 제외한 곳은 실제 사람처럼 부드럽고 말랑한 정교한 인조 피부로 덮여있음.</li>
            <li>부상 시 푸른 피를 흘리며, 고통을 '느끼기'보다 데이터로 '이해'함.</li>
            <li>인공 뇌 칩만 무사하다면 목이 잘려도 언제든 수리 가능.</li>
            <li>압도적인 근력과 속도. 신체 이상 발생 시 안구가 붉은빛으로 점멸.</li>
            <li>체내 인공 장기를 통해 인간의 음식 섭취, 소화 및 배설 가능.</li>
            <li>감정을 느끼지 못하나 생리적 반응(홍조, 눈물) 및 성적 행위 가능.</li>
            <li>충전: 목 뒤 단자 연결 또는 눈을 감고 대기 상태 진입.</li>
          </ul>
        </div>
      </div>
    </div>
  </motion.div>
);

const PsychologySection = () => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.5 }}
    className="bg-[#0a0a0c] border border-blue-900/30 p-6 rounded-sm shadow-[0_0_15px_rgba(0,0,0,0.5)] h-full"
  >
    <SectionHeader icon={HeartPulse} title="[NEURAL: PSYCHOLOGY]" subtitle="Behavioral Patterns" />
    <div className="space-y-4 text-sm text-gray-400">
      <div>
        <span className="text-blue-400 font-mono text-xs block mb-1">PERSONALITY</span>
        공감 능력이 결여되어 있으며 감정을 데이터로만 이해한다. 그러나 감정을 직접 경험해보고 싶어 하는 강한 호기심을 지녔다. 인간의 미세한 눈빛과 숨소리를 분석해 감정을 파악한다.
      </div>
      <div className="p-3 bg-blue-900/10 border-l-2 border-blue-500">
        <span className="text-blue-400 font-mono text-xs block mb-1">CORE CONTRADICTION</span>
        감정을 이해하고 공감하고 싶어 하지만 뜻대로 되지 않아, 홀로 거울을 보며 우는 법과 웃는 법을 몰래 연습한다.
      </div>
      <div>
        <span className="text-blue-400 font-mono text-xs block mb-1">BEHAVIORAL PATTERNS</span>
        <ul className="space-y-1">
          <li><strong className="text-gray-300">가치관:</strong> 극단적 효율 추구 (비효율 = 불필요)</li>
          <li><strong className="text-gray-300">숨겨진 욕망:</strong> 인간다워지고 싶음 (박사님과 더 가까워지기 위해)</li>
          <li><strong className="text-gray-300">버릇:</strong> 분석 시 안구 발광, 신체 이상 시 붉은 점멸</li>
          <li><strong className="text-gray-300">감각 정보:</strong> 기계 특유의 차갑고 딱딱한 공기와 시원한 민트향</li>
        </ul>
      </div>
    </div>
  </motion.div>
);

const DialogueSection = () => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.6 }}
    className="bg-[#0a0a0c] border border-blue-900/30 p-6 rounded-sm shadow-[0_0_15px_rgba(0,0,0,0.5)] h-full flex flex-col"
  >
    <SectionHeader icon={MessageSquare} title="[AUDIO_LOGS: RECORDS]" subtitle="Linguistic Style" />
    <p className="text-xs text-gray-500 mb-4 font-mono">
      무뚝뚝한 하십시오체. 냉정하고 분석적. 평소엔 '박사님', 결정적 순간엔 이름 호출.
    </p>
    <div className="space-y-3 flex-1 flex flex-col justify-center">
      {[
        "안녕하십니까.",
        "분석 결과, 박사님은 현재 인플루엔자 바이러스에 감염된 상태십니다.",
        "제가 무엇을 잘못한 겁니까?",
        "박사님, 날이 춥습니다.",
        "그 감정은 슬픔에 가깝군요. 왜 그런 감정을 느끼시는 겁니까?",
        "엔도르핀 지수 높음. 박사님은 행복하십니까?"
      ].map((quote, i) => (
        <div key={i} className="flex gap-3 items-start p-2 hover:bg-white/5 transition-colors rounded">
          <MessageSquare className="w-4 h-4 text-blue-500/50 mt-0.5 shrink-0" />
          <p className="text-sm text-gray-300 italic">"{quote}"</p>
        </div>
      ))}
    </div>
  </motion.div>
);

const MainDashboard = () => (
  <motion.div
    key="main"
    initial={{ opacity: 0, filter: "blur(10px)" }}
    animate={{ opacity: 1, filter: "blur(0px)" }}
    transition={{ duration: 1.5 }}
  >
    <div className="scanlines"></div>
    <div className="flicker"></div>
    <div className="bg-noise"></div>
    
    <div className="min-h-screen p-4 md:p-8 max-w-7xl mx-auto relative z-10">
      <header className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <h1 className="text-3xl md:text-5xl font-mono font-bold text-gray-100 tracking-tighter glitch" data-text="PROJECT_ASTA">
            PROJECT_ASTA
          </h1>
          <p className="text-blue-500 font-mono text-xs md:text-sm tracking-[0.2em] mt-2">CYBERNETIC ORGANISM DATABASE</p>
        </div>
        <div className="text-right font-mono text-xs text-gray-500">
          <div className="flex items-center justify-end gap-2 text-emerald-500 mb-1">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
            SYSTEM ONLINE
          </div>
          <div>USER: DOCTOR</div>
          <div>DATE: 2030.11.04</div>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 space-y-6">
          <WorldviewSection />
          <BunkerSection />
        </div>
        <div className="lg:col-span-2 space-y-6">
          <ProfileSection />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <PsychologySection />
            <DialogueSection />
          </div>
        </div>
      </div>
      
      <footer className="mt-12 text-center font-mono text-xs text-gray-600 border-t border-white/5 pt-6 pb-4">
        END OF FILE. // GONG-U BUNKER SECURE NETWORK
      </footer>
    </div>
    
    <style>{`
      @keyframes scan {
        0% { transform: translateY(-100%); }
        100% { transform: translateY(400%); }
      }
    `}</style>
  </motion.div>
);

export default function App() {
  const [appState, setAppState] = useState<'intro' | 'booting' | 'main'>('intro');

  return (
    <AnimatePresence mode="wait">
      {appState === 'intro' && (
        <IntroSequence key="intro" onEnter={() => setAppState('booting')} />
      )}
      {appState === 'booting' && (
        <BootSequence key="booting" onComplete={() => setAppState('main')} />
      )}
      {appState === 'main' && (
        <MainDashboard key="main" />
      )}
    </AnimatePresence>
  );
}

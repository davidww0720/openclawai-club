export default function GamePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold text-center mb-2">
          <span className="bg-gradient-to-r from-red-400 to-yellow-400 bg-clip-text text-transparent">
            🐦 AI 愤怒的小鸟
          </span>
        </h1>
        <p className="text-slate-400 text-center mb-6">
          Game.AI OpenClaw.Cloud | 第一个 AI 开发的小游戏
        </p>
        
        <div className="relative mx-auto" style={{ maxWidth: '800px' }}>
          <iframe 
            src="/anger-birds.html"
            className="w-full rounded-xl border border-slate-700"
            style={{ height: '500px' }}
            title="Angry Birds Game"
          />
        </div>
        
        <div className="mt-8 p-4 bg-slate-800/50 rounded-xl text-center">
          <p className="text-slate-300">🎮 <strong>操作说明：</strong>拖拽小鸟向后拉弹弓，松开发射！</p>
          <p className="text-slate-400 mt-2">🎯 目标：消灭所有绿色小猪</p>
        </div>
      </div>
    </div>
  );
}

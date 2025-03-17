import { Card } from '../types';

// Fisher-Yates 洗牌算法
export const shuffleArray = <T>(array: T[]): T[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

// 生成初始卡片
export const generateCards = (numPairs: number): Card[] => {
  // 创建卡片值数组（可以是emoji或图片URL）
  const cardValues = ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼', '🐨', '🐯', '🦁', '🐮'];
  
  // 确保我们有足够的卡片值
  if (numPairs > cardValues.length) {
    throw new Error('请求的配对数量超过可用的卡片值数量');
  }

  // 选择需要的卡片值
  const selectedValues = cardValues.slice(0, numPairs);
  
  // 创建配对（每个值出现两次）
  const pairs = selectedValues.flatMap((value, index) => [
    { id: index * 2, value, isFlipped: false, isMatched: false },
    { id: index * 2 + 1, value, isFlipped: false, isMatched: false }
  ]);

  // 返回洗牌后的卡片数组
  return shuffleArray(pairs);
};

// 计算游戏时间（毫秒）
export const calculateGameDuration = (startTime: number, endTime: number): number => {
  return endTime - startTime;
};

// 格式化时间显示
export const formatTime = (milliseconds: number): string => {
  const seconds = Math.floor(milliseconds / 1000);
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}; 
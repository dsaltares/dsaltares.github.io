/* eslint-disable no-console */
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const SupportedExtensions = ['.png', '.jpg', '.jpeg'];
const ImgFolder = '../public/img';
const Exceptions = new Set(
  ['favicon.png', 'touch-icon-144-precomposed.png'].map((file) =>
    path.join(ImgFolder, file)
  )
);

const optimizeImages = () => getAllImages().forEach(optimizeImage);

const getAllImages = (): string[] => {
  const queue = [ImgFolder];
  const files: string[] = [];

  while (queue.length > 0) {
    const file = queue.pop() as string;
    const stat = fs.statSync(file);
    if (stat.isDirectory()) {
      fs.readdirSync(file).forEach((child) => {
        queue.push(path.join(file, child));
      });
    } else if (
      SupportedExtensions.includes(path.extname(file)) &&
      !Exceptions.has(file)
    ) {
      files.push(file);
    }
  }

  return files;
};

const optimizeImage = (file: string) => {
  console.log('Optimizing image', file);
  const parsed = path.parse(file);
  const options =
    parsed.ext === '.png'
      ? '-quality 50 -define webp:lossless=true'
      : '-quality 80 -define webp:lossless=false';
  execSync(
    `magick ${file} ${options} ${path.join(parsed.dir, `${parsed.name}.webp`)}`
  );
  execSync(`rm ${file}`);
};

optimizeImages();

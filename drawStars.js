function drawStars(bottom = 5) {
  
  if (bottom <= 0) return '';
  if (bottom % 2 === 0) bottom = bottom - 1;

  const lines = [];
  for (let stars = 1; stars <= bottom; stars += 1) {
    const spaces = (bottom - stars) / 1;
    lines.push(' '.repeat(spaces) + '*'.repeat(stars));
  }
  return lines.join('\n');
}
drawStars();
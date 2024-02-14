import { formatFileSize } from './formatFileSize';

describe('formatFileSize', () => {
  it('formats bytes into MB for sizes less than 1GB', () => {
    expect(formatFileSize(1024)).toBe('0.00MB'); // 1KB in MB
    expect(formatFileSize(1048576)).toBe('1.00MB'); // 1MB in MB
    expect(formatFileSize(15728640)).toBe('15.00MB'); // 15MB in MB
  });

  it('formats bytes into GB for sizes equal to or greater than 1GB', () => {
    expect(formatFileSize(1073741824)).toBe('1.0GB'); // 1GB in GB
    expect(formatFileSize(2147483648)).toBe('2.0GB'); // 2GB in GB
    expect(formatFileSize(3221225472)).toBe('3.0GB'); // 3GB in GB
  });
});

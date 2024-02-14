
export function formatFileSize(bytes: number): string {
    return (
        bytes < 1073741824 ? (bytes / 1024 / 1024).toFixed(2) + 'MB' 
        : (bytes / 1024 / 1024 / 1024).toFixed(1) + 'GB');
  }
  
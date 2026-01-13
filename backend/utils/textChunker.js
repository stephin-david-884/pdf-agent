/**
 * Split text into chunks for better AI processing
 * @param {string} text - Full text to chunk
 * @param {number} chunkSize - Target size per chunk ( in words)
 * @param {number} overlap - Number of words to overlap between chunks
 * @returns {Array<{content: string, chunkIndex: number, pageNumber: number}>}
 */

export const chunkText = (text, chunkSize=500, overlap = 50) => {
    if(!text || text.trim().length === 0) {
        return []
    }
}
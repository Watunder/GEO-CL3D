class LocalizeManager {
    constructor() {

    }

    translate() {

    }

    autoTranslation() {
        
    }

    saveTranslation() {

    }

    readTranslation() {

    }

    /**
     * @returns {LocalizeManager}
     */
    static getInstance() {
        this.instance = this.instance ? null : new LocalizeManager();

        return this.instance;
    }
}

/**
 * 
 * @param {String} text 
 * @param {{ language_tag?: String, translatedText?: String, fontFace?: FontFace }} translation 
 * @returns 
 */
export const Localize = (text, translation) => {
    let manager = LocalizeManager.getInstance();
    
    text = manager.translate(text);

    return text;
}

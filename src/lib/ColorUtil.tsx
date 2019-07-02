class ColorUtil {
    static textToNumber = (str: string): number => {
        let total: number = 0
        for(let i = 0; i < str.length; i++){
            total = total + str.charCodeAt(i)
        }
        return total
    }

    static textToHsl = (str: string): any => {
        const n = ColorUtil.textToNumber(str)
        return {
            h: n % 360,
            s: 50,
            l: 50
        }
    }
}

export default ColorUtil
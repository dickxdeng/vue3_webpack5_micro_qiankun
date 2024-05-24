/**
 * 去除空格
 * @author QuerySystem
 */

 /**
 * 去除两端空格
 * @author QuerySystem
 */
  export function trim(val: string): string {
    return val.replace(/(^\s*)|(\s*$)/g, "");
}

 /**
 * 去除左边空格
 * @author QuerySystem
 */
export function ltrim(val: string): string {
    return val.replace(/(^\s*)/g,"");
}

 /**
 * 去除右边边空格
 * @author QuerySystem
 */
export function rtrim(val: string): string{
    return val.replace(/(\s*$)/g,"");
}

 /**
 * 去除两端 ,
 * @author QuerySystem
 */
export function trimComma(val: string): string {
    return val.replace(/(^,*)|(,*$)/g, "");
}

 /**
 * 去除两端 |
 * @author QuerySystem
 */
export function trimVerticalBar(val: string): string{
    return val.replace(/(^\|*)|(\|*$)/g, "");
}

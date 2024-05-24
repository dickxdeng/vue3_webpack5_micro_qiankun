/**
 * 获取对应子项目入口  composables
 * @author QuerySystem
 */
import { childProjectEntry } from "@/qiankun";

export default function useQiankunMicroChildEntry(name: string): string {
    return childProjectEntry(name)
}

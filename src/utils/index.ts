/*
 * @Author: liuzhihao
 * @email: liuzhihao@hatech.com.cn
 * @Date: 2023-05-26 16:16:54
 * @LastEditors: liuzhihao
 * @LastEditTime: 2023-06-07 10:24:41
 * @description: 描述
 */
interface TreeNode {
  [key: string]: any;
  children?: TreeNode[];
}
export const treeToArray = (tree: TreeNode[]): any[] => {
  let stack = tree;
  let res = [];
  while (stack.length) {
    const node: TreeNode | undefined = stack.shift();
    const { children, ...item } = node!;
    res.push(item);
    if (children && children.length > 0) {
      stack.unshift(...children!);
    }
  }
  return res;
};
/**
 * @name: getFlatMenuList
 * @param {Menu} menuList
 * @return {Array}
 * @description: 使用递归扁平化菜单，方便添加动态路由
 */
export function getFlatMenuList(menuList: Menu.MenuOptions[]): Menu.MenuOptions[] {
  let newMenuList: Menu.MenuOptions[] = JSON.parse(JSON.stringify(menuList));
  return treeToArray(newMenuList);
}
/**
 * @name: getShowMenuList
 * @param {Menu} menuList
 * @return {Array}
 * @description: 使用递归过滤出需要渲染再左侧菜单的列表(需要过滤isHide为true的菜单)
 */
export function getShowMenuList(menuList: Menu.MenuOptions[]): Menu.MenuOptions[] {
  let newMenuList: Menu.MenuOptions[] = JSON.parse(JSON.stringify(menuList));
  return newMenuList.filter((item) => {
    item.children?.length > 0 && (item.children = getShowMenuList(item.children));
    return !item.meta?.isHide;
  });
}

export function getAllBreadcrumbList(menuList: Menu.MenuOptions[], parent = [], result: { [key: string]: any } = {}) {
  for (const item of menuList) {
    result[item.path] = [...parent, item];
    if (item.children) getAllBreadcrumbList(item.children, result[item.path], result);
  }
  return result;
}

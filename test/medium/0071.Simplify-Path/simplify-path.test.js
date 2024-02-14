import { 
    simplifyPath 
} from "../../../solution/medium/0071.Simplify-Path/simplify-path";

describe("0020.Valid-Parentheses", () => {

    test('Input: path = "/home/", Output: "/home"', () => {
        expect( simplifyPath("/home/") ).toEqual( "/home" );
    })

    test('Input: path = "/../", Output: "/"', () => {
        expect( simplifyPath("/../") ).toEqual( "/" );
    })

    test('Input: path = "/home//foo/", Output: "/home/foo"', () => {
        expect( simplifyPath("/home//foo/") ).toEqual( "/home/foo" );
    })

    test('Input: path = "/a//b////c/d//././/..", Output: "/a/b/c"', () => {
        expect( simplifyPath("/a//b////c/d//././/..") ).toEqual( "/a/b/c" );
    })

});
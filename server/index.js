import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { Links, Meta, Outlet, Scripts, ScrollRestoration, ServerRouter, UNSAFE_withComponentProps, UNSAFE_withErrorBoundaryProps, isRouteErrorResponse } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
//#region \0rolldown/runtime.js
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
//#endregion
//#region node_modules/.pnpm/@react-router+dev@7.16.0_@react-router+serve@7.16.0_react-router@7.16.0_react-dom@19.2._3614c66a5a2dc05702717317afa355a0/node_modules/@react-router/dev/dist/config/defaults/entry.server.node.tsx
var entry_server_node_exports = /* @__PURE__ */ __exportAll({
	default: () => handleRequest,
	streamTimeout: () => streamTimeout
});
var streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
	if (request.method.toUpperCase() === "HEAD") return new Response(null, {
		status: responseStatusCode,
		headers: responseHeaders
	});
	return new Promise((resolve, reject) => {
		let shellRendered = false;
		let userAgent = request.headers.get("user-agent");
		let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
		let timeoutId = setTimeout(() => abort(), 6e3);
		const { pipe, abort } = renderToPipeableStream(/* @__PURE__ */ jsx(ServerRouter, {
			context: routerContext,
			url: request.url
		}), {
			[readyOption]() {
				shellRendered = true;
				const body = new PassThrough({ final(callback) {
					clearTimeout(timeoutId);
					timeoutId = void 0;
					callback();
				} });
				const stream = createReadableStreamFromReadable(body);
				responseHeaders.set("Content-Type", "text/html");
				pipe(body);
				resolve(new Response(stream, {
					headers: responseHeaders,
					status: responseStatusCode
				}));
			},
			onShellError(error) {
				reject(error);
			},
			onError(error) {
				responseStatusCode = 500;
				if (shellRendered) console.error(error);
			}
		});
	});
}
//#endregion
//#region app/root.tsx
var root_exports = /* @__PURE__ */ __exportAll({
	ErrorBoundary: () => ErrorBoundary,
	Layout: () => Layout,
	default: () => root_default,
	links: () => links
});
var links = () => [
	{
		rel: "preconnect",
		href: "https://fonts.googleapis.com"
	},
	{
		rel: "preconnect",
		href: "https://fonts.gstatic.com",
		crossOrigin: "anonymous"
	},
	{
		rel: "stylesheet",
		href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
	}
];
function Layout({ children }) {
	return /* @__PURE__ */ jsxs("html", {
		lang: "en",
		children: [/* @__PURE__ */ jsxs("head", { children: [
			/* @__PURE__ */ jsx("meta", { charSet: "utf-8" }),
			/* @__PURE__ */ jsx("meta", {
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			}),
			/* @__PURE__ */ jsx(Meta, {}),
			/* @__PURE__ */ jsx(Links, {})
		] }), /* @__PURE__ */ jsxs("body", { children: [
			children,
			/* @__PURE__ */ jsx(ScrollRestoration, {}),
			/* @__PURE__ */ jsx(Scripts, {})
		] })]
	});
}
var root_default = UNSAFE_withComponentProps(function App() {
	return /* @__PURE__ */ jsx(Outlet, {});
});
var ErrorBoundary = UNSAFE_withErrorBoundaryProps(function ErrorBoundary({ error }) {
	let message = "Oops!";
	let details = "An unexpected error occurred.";
	let stack;
	if (isRouteErrorResponse(error)) {
		message = error.status === 404 ? "404" : "Error";
		details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
	}
	return /* @__PURE__ */ jsxs("main", {
		className: "pt-16 p-4 container mx-auto",
		children: [
			/* @__PURE__ */ jsx("h1", { children: message }),
			/* @__PURE__ */ jsx("p", { children: details }),
			stack
		]
	});
});
//#endregion
//#region app/_dev/hed.tsx
function Hed() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx("div", {
			className: " font-bold tracking-wider text-2xl t-2 justify-center align-middle flex   rounded-3xl p-5 bg-[#138eb4ad]  items-center",
			children: /* @__PURE__ */ jsx("h2", {
				className: "",
				children: "Salem Portfolio"
			})
		}),
		/* @__PURE__ */ jsx("br", {}),
		/* @__PURE__ */ jsx("div", {
			className: "   bg-[#1E293B] z-50 p-5 rounded-3xl  justify-between items-center t-2 max-width[400px]",
			children: /* @__PURE__ */ jsxs("div", {
				className: "flex gap-5 transition-all duration-300 ease-out justify-between items-center ",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "hover:-translate-y-1.5 hover:scale-[1.02]  hover:shadow-2xl  transition-all duration-500 ease-out ",
						children: /* @__PURE__ */ jsx("a", {
							href: "#about",
							children: "AboutMe"
						})
					}),
					/* @__PURE__ */ jsx("div", {
						className: "hover:-translate-y-1.5 hover:scale-[1.02]:  hover:shadow-2xl transition-all duration-500 ease-out",
						children: /* @__PURE__ */ jsx("a", {
							href: "#mywork",
							children: "My Work"
						})
					}),
					/* @__PURE__ */ jsx("div", {
						className: "hover:-translate-y-1.5 hover:scale-[1.02]:  hover:shadow-2xl transition-all duration-500 ease-out",
						children: /* @__PURE__ */ jsx("a", {
							href: "#skills",
							children: "My Skills"
						})
					}),
					" ",
					/* @__PURE__ */ jsx("div", {
						className: "hover:-translate-y-1.5 hover:scale-[1.02]:  hover:shadow-2xl transition-all duration-500 ease-out",
						children: /* @__PURE__ */ jsx("a", {
							href: "#",
							children: "CV"
						})
					}),
					/* @__PURE__ */ jsx("div", {
						className: "hover:-translate-y-1.5 hover:scale-[1.02]  hover:shadow-2xl  transition-all duration-500 ease-out ",
						children: /* @__PURE__ */ jsx("a", {
							className: "transition-all duration-300 ease-out ",
							href: "https://github.com/AGsalem",
							rel: "noopener noreferrer",
							target: "blank",
							children: "GitHub"
						})
					}),
					/* @__PURE__ */ jsx("div", {
						className: "hover:-translate-y-1.5 hover:scale-[1.02]  hover:shadow-2xl  transition-all duration-500 ease-out ",
						children: /* @__PURE__ */ jsx("div", {
							className: "flex gap-1",
							children: /* @__PURE__ */ jsx("a", {
								className: "",
								href: "https://www.linkedin.com/in/ahemdgamalsalem/",
								target: "blank\n                            ",
								rel: "noopener noreferrer",
								children: "Linked In"
							})
						})
					})
				]
			})
		})
	] });
}
//#endregion
//#region app/assets/2.png
var _2_default = "/assets/2-B1T8CqnQ.png";
//#endregion
//#region app/_dev/about.tsx
function About() {
	return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("div", {
		id: "about",
		className: "bg-[#3639cebd] rounded-3xl font-bold p-5 t-3   flex justify-between  flex-col      ",
		children: /* @__PURE__ */ jsxs("div", {
			className: " justify-between ",
			children: [
				/* @__PURE__ */ jsx("div", {
					className: "flex justify-between  flex-col  ",
					children: /* @__PURE__ */ jsx("h1", { children: "About Me" })
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "top-5 flex  justify-between  gap-3.5",
					children: [/* @__PURE__ */ jsx("img", {
						src: _2_default,
						alt: "a",
						width: 200
					}), /* @__PURE__ */ jsx("div", {
						className: " text-xl   pr-9 text-left font-bold",
						children: /* @__PURE__ */ jsx("h1", { children: "I'm  Ahmed Gamal Salem Full stack Developer" })
					})]
				}),
				/* @__PURE__ */ jsx("br", {})
			]
		})
	}) });
}
//#endregion
//#region app/assets/3.png
var _3_default = "/assets/3-CduF_5jN.png";
//#endregion
//#region app/_dev/footer.tsx
function Footer() {
	return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", {
		className: "  bg-[#2d2f9e56]  z-50 border-slate-700 font-bold p-2.5 text  gap-2.5  border rounded-2xl ",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "font-bold",
				children: /* @__PURE__ */ jsx("h2", { children: "Salem Portfolio" })
			}),
			/* @__PURE__ */ jsx("div", {}),
			/* @__PURE__ */ jsxs("div", {
				className: "flex align-middle justify items-center gap-10",
				children: [
					/* @__PURE__ */ jsx("div", {}),
					/* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("a", {
						href: "https://www.linkedin.com/in/ahemdgamalsalem/",
						rel: "noopener noreferrer",
						target: "__blank",
						children: [/* @__PURE__ */ jsx("img", {
							className: "hover:-translate-y-2 hover:scale-[1.02]  hover:shadow-2xl  transition-all duration-300 ease-out",
							src: _2_default,
							width: 40
						}), "Linked IN"]
					}) }),
					/* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("a", {
						href: "https://github.com/AGsalem",
						rel: "noopener noreferrer",
						target: "__blank",
						children: [/* @__PURE__ */ jsx("img", {
							className: "hover:-translate-y-2 hover:scale-[1.02]  hover:shadow-2xl  transition-all duration-300 ease-out",
							src: _3_default,
							width: 40
						}), "GitHub"]
					}) }),
					/* @__PURE__ */ jsxs("h6", { children: [" ", /* @__PURE__ */ jsx("a", {
						rel: "noopener noreferrer",
						className: "text-[#82f7ff]",
						href: "https://github.com/AGsalem/portfolio",
						target: "__blank",
						children: "View Source Code"
					})] })
				]
			}),
			/* @__PURE__ */ jsx("footer", {
				className: "flex align-middle justify-center items-center",
				children: "@جميع الحقوق محفوظة للمطور سالم © 2026"
			})
		]
	}) });
}
//#endregion
//#region app/_dev/project/pro_back.tsx
function Pro_back() {
	return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", {
		className: "bg-[#4397b1c5] rounded-b-2xl p-1",
		children: [
			/* @__PURE__ */ jsx("h2", { children: "Back_End" }),
			/* @__PURE__ */ jsx("div", {
				className: " text-left bg-[rgba(33,52,130,0.8)] p-5 rounded-2xl",
				children: /* @__PURE__ */ jsx("h1", {})
			}),
			/* @__PURE__ */ jsx("br", {})
		]
	}) });
}
//#endregion
//#region app/_dev/project/pro_fro.tsx
function Project_fro() {
	return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", {
		className: "bg-[#4397b1c5]  p-1",
		children: [
			/* @__PURE__ */ jsx("h3", {}),
			/* @__PURE__ */ jsx("h2", { children: " Front_End" }),
			/* @__PURE__ */ jsx("div", {
				className: " text-left bg-[rgba(33,52,130,0.8)] p-5 rounded-2xl",
				children: /* @__PURE__ */ jsx("h1", {})
			}),
			/* @__PURE__ */ jsx("br", {})
		]
	}) });
}
//#endregion
//#region app/_dev/project/pro.tsx
function Project_Gen() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("div", {
		id: "mywork",
		className: "bg-[#4397b1ad] p-4 align-middle justify-center  rounded-t-2xl flex",
		children: /* @__PURE__ */ jsx("h2", { children: "MY Project" })
	}), /* @__PURE__ */ jsxs("div", {
		className: "  flex-col z-10 align-middle justify-center items-center  ",
		children: [/* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Project_fro, {}) }), /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Pro_back, {}) })]
	})] });
}
//#endregion
//#region app/_exp/skills.tsx
function Skills() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs("div", {
		className: " bg-[#3639cebd] p-3 rounded-t-2xl",
		children: [
			/* @__PURE__ */ jsx("h2", { children: "My Skils" }),
			/* @__PURE__ */ jsx("h3", { children: "Experiences" }),
			" "
		]
	}), /* @__PURE__ */ jsx("div", {
		id: "skills",
		className: "w-full flex  max-w-full overflow-x-auto overflow-y-auto h-full max-height-[400px] px-2.5  bg-[#3639cebd] p-3 rounded-b-2xl",
		children: /* @__PURE__ */ jsx("div", {
			className: "flex justify-center align-middle min-w-150 w-full ",
			children: /* @__PURE__ */ jsxs("table", {
				className: "w-full  table-fixed",
				children: [
					/* @__PURE__ */ jsx("thead", {}),
					/* @__PURE__ */ jsxs("tr", {
						className: "gap-2",
						children: [
							/* @__PURE__ */ jsx("th", { children: /* @__PURE__ */ jsx("h2", { children: "Front-End" }) }),
							/* @__PURE__ */ jsx("th", { children: /* @__PURE__ */ jsx("h2", { children: "Back-End" }) }),
							/* @__PURE__ */ jsx("th", { children: /* @__PURE__ */ jsx("h2", { children: "Database" }) }),
							/* @__PURE__ */ jsxs("th", { children: [
								/* @__PURE__ */ jsx("h2", { children: "Systems" }),
								/* @__PURE__ */ jsx("p", {
									className: "text-sm font-bold",
									children: "(Linux_Windows)"
								}),
								/* @__PURE__ */ jsx("p", {
									className: "text-sm ",
									children: "windows(Genral)"
								})
							] })
						]
					}),
					/* @__PURE__ */ jsx("tbody", { children: /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx("td", {
						colSpan: 4,
						className: "font-bold text-xl",
						children: "Duration"
					}) }) }),
					/* @__PURE__ */ jsxs("tr", { children: [
						/* @__PURE__ */ jsx("td", { children: "1 Year" }),
						/* @__PURE__ */ jsx("td", { children: "6 Month" }),
						/* @__PURE__ */ jsx("td", { children: "4 Month" }),
						/* @__PURE__ */ jsx("td", { children: "1 Year " })
					] }),
					/* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx("td", {
						colSpan: 4,
						children: "Tech Stack"
					}) }) }),
					/* @__PURE__ */ jsxs("tr", { children: [
						/* @__PURE__ */ jsxs("td", {
							className: "font-bold",
							children: [
								"NextJS&React",
								/* @__PURE__ */ jsx("br", {}),
								/* @__PURE__ */ jsx("span", {
									className: "text-sm",
									children: "Html,CSS,JS"
								})
							]
						}),
						/* @__PURE__ */ jsxs("td", {
							className: "font-bold",
							children: [
								/* @__PURE__ */ jsx("p", { children: "Express" }),
								/* @__PURE__ */ jsx("p", { children: "&Fastify" }),
								/* @__PURE__ */ jsx("p", { children: "&Nestjs" })
							]
						}),
						/* @__PURE__ */ jsxs("td", {
							className: "font-bold",
							children: ["MySQL& ", /* @__PURE__ */ jsx("p", { children: "Postgres" })]
						}),
						/* @__PURE__ */ jsxs("td", { children: [
							/* @__PURE__ */ jsx("h3", {
								className: "font-bold text-xl ",
								children: "Linux"
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-sm",
								children: "Pop!os"
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-sm",
								children: "KaliLinux"
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-sm",
								children: "RhinoLiunx"
							})
						] })
					] }),
					/* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx("td", {
						colSpan: 4,
						className: "font-bold text-xl",
						children: "Projects"
					}) }) }),
					/* @__PURE__ */ jsxs("tr", { children: [
						/* @__PURE__ */ jsx("td", {}),
						/* @__PURE__ */ jsx("td", {}),
						/* @__PURE__ */ jsx("td", {}),
						/* @__PURE__ */ jsx("td", {})
					] }),
					/* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx("td", {
						colSpan: 4,
						className: "text-2xl font-bold",
						children: "Language"
					}) }) }),
					/* @__PURE__ */ jsxs("tr", { children: [/* @__PURE__ */ jsx("td", {
						colSpan: 4,
						className: "font-bold",
						children: "Python  &  JavaScript  &  TypeScript  &  Dart"
					}), "  "] }),
					/* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx("td", {
						colSpan: 4,
						className: "text-xl font-bold",
						children: "Cources"
					}) }) }),
					/* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx("td", {
						colSpan: 4,
						children: /* @__PURE__ */ jsx("h2", { children: "CS50_2026" })
					}) })
				]
			})
		})
	})] });
}
//#endregion
//#region app/routes/home.tsx
var home_exports = /* @__PURE__ */ __exportAll({ default: () => home_default });
var home_default = UNSAFE_withComponentProps(function App() {
	const [a, b] = useState(false);
	useEffect(() => {
		const t = setTimeout(() => {
			b(true);
		}, 50);
		return () => clearTimeout(t);
	}, []);
	return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", {
		className: ` transform transition-all duration-2500  ease-out  font-luxury
        ${a ? " opacity-800 translate-y-0" : "  opacity-0  translate-y-5"}
          `,
		children: [
			/* @__PURE__ */ jsx("br", {}),
			/* @__PURE__ */ jsx(Hed, {}),
			/* @__PURE__ */ jsx("br", {}),
			/* @__PURE__ */ jsx(About, {}),
			/* @__PURE__ */ jsx("br", {}),
			/* @__PURE__ */ jsx(Project_Gen, {}),
			/* @__PURE__ */ jsx("br", {}),
			/* @__PURE__ */ jsx(Skills, {}),
			/* @__PURE__ */ jsx("br", {}),
			/* @__PURE__ */ jsx(Footer, {})
		]
	}) });
});
//#endregion
//#region \0virtual:react-router/server-manifest
var server_manifest_default = {
	"entry": {
		"module": "/assets/entry.client-p7x3AT2K.js",
		"imports": ["/assets/jsx-runtime-DwHLFr70.js"],
		"css": []
	},
	"routes": {
		"root": {
			"id": "root",
			"parentId": void 0,
			"path": "",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": true,
			"module": "/assets/root-DTAKospG.js",
			"imports": ["/assets/jsx-runtime-DwHLFr70.js"],
			"css": ["/assets/root-FKrOIuwd.css", "/assets/app-jauDPT38.css"],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/home": {
			"id": "routes/home",
			"parentId": "root",
			"path": void 0,
			"index": true,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/home-Ds9O-MVg.js",
			"imports": ["/assets/jsx-runtime-DwHLFr70.js"],
			"css": ["/assets/app-jauDPT38.css"],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		}
	},
	"url": "/assets/manifest-a6ceeca7.js",
	"version": "a6ceeca7",
	"sri": void 0
};
//#endregion
//#region \0virtual:react-router/server-build
var assetsBuildDirectory = "build/client";
var basename = "/";
var future = {
	"unstable_optimizeDeps": false,
	"v8_passThroughRequests": true,
	"v8_trailingSlashAwareDataRequests": true,
	"unstable_previewServerPrerendering": false,
	"v8_middleware": true,
	"v8_splitRouteModules": true,
	"v8_viteEnvironmentApi": true
};
var ssr = true;
var isSpaMode = false;
var prerender = [];
var routeDiscovery = {
	"mode": "lazy",
	"manifestPath": "/__manifest"
};
var publicPath = "/";
var entry = { module: entry_server_node_exports };
var routes = {
	"root": {
		id: "root",
		parentId: void 0,
		path: "",
		index: void 0,
		caseSensitive: void 0,
		module: root_exports
	},
	"routes/home": {
		id: "routes/home",
		parentId: "root",
		path: void 0,
		index: true,
		caseSensitive: void 0,
		module: home_exports
	}
};
var allowedActionOrigins = false;
//#endregion
export { allowedActionOrigins, server_manifest_default as assets, assetsBuildDirectory, basename, entry, future, isSpaMode, prerender, publicPath, routeDiscovery, routes, ssr };

<script lang="ts">
	import "../app.css";
	import { PUBLIC_NAME, PUBLIC_PICTURE } from "$env/static/public";
	import { onMount } from "svelte";
	import { version } from "$app/environment";

	let url: string;
	onMount(() => {
		url = window.location.href;
	});
</script>

<svelte:head>
	<meta property="og:site_name" content={PUBLIC_NAME} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content={url} />
	<link rel="icon" type="image/x-icon" href={PUBLIC_PICTURE} />
	<meta name="theme-color" media="(prefers-color-scheme: light)" content="#FFF" />
	<meta name="theme-color" media="(prefers-color-scheme: dark)" content="#000" />
	<meta name="description" content="Home Page" />
</svelte:head>

<header>
	<nav class="flex px-auto py-6 md:px-10">
		<!-- svelte-ignore a11y-missing-attribute -->
		<img src="https://tradewind886.github.io/btczhlogo.png" width="140" height="50">
		<div class="ml-auto font-semibold uppercase">
			<ul class="flex sm:gap-2 lg:gap-4">
				<li><a class="flex px-3 py-2" href="/" target="_self">首頁</a></li>
				<li><a class="flex px-3 py-2" href="/posts" target="_self">新聞</a></li>
				<li><a class="flex px-3 py-2" href="/education" target="_self">教材</a></li>
				<li><a class="flex px-3 py-2" href="/atom" target="_self">RSS</a></li>
				<li>

          <a href="javascript:void(0);" class="flex px-3 py-2 icon" onclick="ExpandMenu()">&#9776;</a>
          <script>
function ExpandMenu() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
</script>
				</li>
			</ul>
		</div>
<div id="mySidenav" class="sidenav">
  <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
  <a href="/tags/比特幣市場">比特幣市場</a>
  <a href="/tags/國家法規">國家法規</a>
  <a href="/tags/技術">技術</a>
  <a href="/tags/幣圈市場">幣圈市場</a>
  <a href="/tags/區塊鏈應用">區塊鏈應用</a>
  <a href="/tags/比特中文觀點">比特中文觀點</a>
  <a href="/tags/中文資料庫">中文資料庫</a>
  <a href="/about">關於我們</a>
  
</div>
	</nav>
</header>

<main class="container px-6 py-8 md:px-24 lg:px-52">
	<slot />
</main>

<hr class="border-muted-light" />
<footer class="mx-6 my-6 flex text-xs">
	<div class="mr-auto">
		Powered by <a class="underline" href="https://github.com/jacany/nblog">nblog</a> v{version}
	</div>
	<div class="text-right">
		This website is published under the <a
			class="underline"
			href="https://github.com/jacany/nblog/tree/master/LICENSE">MIT License</a
		>
	</div>
</footer>

<style lang="postcss">
	:global(html, body) {
		@apply font-sans subpixel-antialiased dark:bg-[#242731] dark:text-white;
	}
</style>

// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', function() {
    // 移动端导航菜单切换
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // 切换汉堡菜单动画
            const bars = navToggle.querySelectorAll('.bar');
            bars.forEach((bar, index) => {
                if (navMenu.classList.contains('active')) {
                    if (index === 0) bar.style.transform = 'rotate(45deg) translate(5px, 5px)';
                    if (index === 1) bar.style.opacity = '0';
                    if (index === 2) bar.style.transform = 'rotate(-45deg) translate(7px, -6px)';
                } else {
                    bar.style.transform = 'none';
                    bar.style.opacity = '1';
                }
            });
        });
    }

    // 平滑滚动到锚点
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    const offsetTop = targetElement.offsetTop - 70; // 考虑导航栏高度
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
                
                // 移动端关闭菜单
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    const bars = navToggle.querySelectorAll('.bar');
                    bars.forEach(bar => {
                        bar.style.transform = 'none';
                        bar.style.opacity = '1';
                    });
                }
            }
        });
    });

    // 回到顶部按钮
    const backToTopButton = document.getElementById('back-to-top');
    
    if (backToTopButton) {
        // 监听滚动事件
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.add('show');
            } else {
                backToTopButton.classList.remove('show');
            }
        });

        // 点击回到顶部
        backToTopButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // 导航栏滚动效果
    const navbar = document.querySelector('.navbar');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
        
        lastScrollTop = scrollTop;
    });

    // 文章卡片悬停效果增强
    const articleCards = document.querySelectorAll('.article-card');
    articleCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });

        // 移除文章卡片的点击事件，避免与阅读全文按钮冲突
    });

    // 联系链接悬停效果
    const contactLinks = document.querySelectorAll('.contact-link');
    contactLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            const icon = this.querySelector('i');
            if (icon) {
                icon.style.transform = 'scale(1.2) rotate(5deg)';
            }
        });
        
        link.addEventListener('mouseleave', function() {
            const icon = this.querySelector('i');
            if (icon) {
                icon.style.transform = 'scale(1) rotate(0deg)';
            }
        });

        // 微信联系方式特殊处理
        if (link.classList.contains('wechat')) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                showWeChatModal();
            });
        }
    });

    // 微信二维码模态框
    function showWeChatModal() {
        const modal = document.createElement('div');
        modal.className = 'wechat-modal';
        modal.innerHTML = `
            <div class="modal-backdrop"></div>
            <div class="modal-content">
                <div class="modal-header">
                    <h3>微信联系方式</h3>
                    <button class="modal-close">&times;</button>
                </div>
                <div class="modal-body">
                    <div class="wechat-info">
                        <i class="fab fa-weixin wechat-icon"></i>
                        <p>微信号：<strong>LFH038188</strong></p>
                        <p class="wechat-tip">请添加微信好友并注明来意</p>
                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        // 关闭模态框
        const closeModal = () => {
            modal.style.opacity = '0';
            setTimeout(() => {
                document.body.removeChild(modal);
            }, 300);
        };

        modal.querySelector('.modal-close').addEventListener('click', closeModal);
        modal.querySelector('.modal-backdrop').addEventListener('click', closeModal);

        // 显示动画
        setTimeout(() => {
            modal.style.opacity = '1';
        }, 10);
    }

    // 技能标签动画效果
    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach((tag, index) => {
        // 延迟显示动画
        setTimeout(() => {
            tag.style.opacity = '0';
            tag.style.transform = 'translateY(20px)';
            tag.style.transition = 'all 0.5s ease';
            
            setTimeout(() => {
                tag.style.opacity = '1';
                tag.style.transform = 'translateY(0)';
            }, 100);
        }, index * 100);

        // 悬停效果
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
            this.style.boxShadow = '0 5px 15px rgba(99, 102, 241, 0.3)';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = 'none';
        });
    });

    // 滚动时元素淡入动画
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // 观察需要动画的元素
    const animatedElements = document.querySelectorAll('.article-card, .contact-link, .about-text, .about-image');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // CTA按钮点击效果
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function(e) {
            // 创建涟漪效果
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(255, 255, 255, 0.5)';
            ripple.style.transform = 'scale(0)';
            ripple.style.animation = 'ripple 0.6s linear';
            ripple.style.pointerEvents = 'none';
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    }

    // 添加涟漪动画的CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
        
        .article-card {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
        }
        
        .contact-link i {
            transition: all 0.3s ease !important;
        }
    `;
    document.head.appendChild(style);

    // 打字机效果（可选，为hero标题添加）
    function typeWriter(element, text, speed = 100) {
        let i = 0;
        element.innerHTML = '';
        
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    }

    // 页面加载完成后的欢迎动画
    setTimeout(() => {
        const heroTitle = document.querySelector('.hero-title');
        if (heroTitle) {
            const originalText = heroTitle.textContent;
            // 可以启用打字机效果
            // typeWriter(heroTitle, originalText, 80);
        }
    }, 1000);

    // 添加键盘导航支持
    document.addEventListener('keydown', function(e) {
        // ESC键关闭移动菜单
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            const bars = navToggle.querySelectorAll('.bar');
            bars.forEach(bar => {
                bar.style.transform = 'none';
                bar.style.opacity = '1';
            });
        }
    });

    // 性能优化：节流滚动事件
    let ticking = false;
    function updateOnScroll() {
        // 这里可以添加更多滚动相关的逻辑
        ticking = false;
    }

    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(updateOnScroll);
            ticking = true;
        }
    });

    // 文章数据
    const articlesData = {
        1: {
            title: '现代前端开发最佳实践',
            date: '2025年8月15日',
            category: '技术',
            icon: 'fas fa-code',
            content: `
                <h2>引言</h2>
                <p>在快速发展的前端技术领域，掌握最佳实践对于开发高质量、可维护的应用程序至关重要。本文将深入探讨现代前端开发中的核心概念和实践方法。</p>
                
                <h2>组件化架构</h2>
                <p>组件化是现代前端开发的基石。通过将UI拆分为独立、可复用的组件，我们可以：</p>
                <ul>
                    <li>提高代码的可维护性和可读性</li>
                    <li>促进团队协作和代码复用</li>
                    <li>简化测试和调试过程</li>
                    <li>实现更好的关注点分离</li>
                </ul>
                
                <h3>组件设计原则</h3>
                <p>在设计组件时，应该遵循以下原则：</p>
                <blockquote>
                    "一个组件应该只做一件事，并且把它做好。" - Unix哲学在前端开发中的体现
                </blockquote>
                
                <h2>状态管理</h2>
                <p>随着应用复杂度的增加，状态管理变得越来越重要。现代前端应用通常采用以下状态管理策略：</p>
                <ul>
                    <li><strong>本地状态</strong>：组件内部的状态管理</li>
                    <li><strong>全局状态</strong>：跨组件的状态共享</li>
                    <li><strong>服务端状态</strong>：与后端API交互的数据管理</li>
                </ul>
                
                <h2>性能优化</h2>
                <p>性能优化是前端开发中的重要环节，主要包括：</p>
                <h3>代码层面优化</h3>
                <ul>
                    <li>懒加载和代码分割</li>
                    <li>虚拟化长列表</li>
                    <li>防抖和节流</li>
                    <li>避免不必要的重新渲染</li>
                </ul>
                
                <h3>资源优化</h3>
                <ul>
                    <li>图片压缩和格式选择</li>
                    <li>CSS和JavaScript压缩</li>
                    <li>CDN使用</li>
                    <li>缓存策略</li>
                </ul>
                
                <h2>总结</h2>
                <p>现代前端开发需要我们在技术选型、架构设计、性能优化等多个方面保持最佳实践。通过持续学习和实践，我们可以构建出更好的用户体验和更可维护的代码。</p>
            `
        },
        2: {
            title: '关于学习方法的一些思考',
            date: '2025年6月10日',
            category: '思考',
            icon: 'fas fa-lightbulb',
            content: `
                <h2>学习的本质</h2>
                <p>在这个信息爆炸的时代，我们每天都被海量的信息包围。如何在这些信息中筛选出真正有价值的知识，并将其转化为自己的能力，成为了一个重要的课题。</p>
                
                <h2>有效学习的几个原则</h2>
                
                <h3>1. 主动学习vs被动学习</h3>
                <p>主动学习意味着我们带着问题和目标去学习，而不是被动地接受信息。主动学习的特点包括：</p>
                <ul>
                    <li>明确学习目标和动机</li>
                    <li>主动提出问题和假设</li>
                    <li>寻求反馈和验证</li>
                    <li>将知识与已有经验连接</li>
                </ul>
                
                <h3>2. 深度学习vs浅层学习</h3>
                <blockquote>
                    "学而不思则罔，思而不学则殆。" - 孔子
                </blockquote>
                <p>深度学习要求我们不仅要记住知识点，更要理解其背后的原理和逻辑。这包括：</p>
                <ul>
                    <li>理解概念之间的关联</li>
                    <li>能够举一反三</li>
                    <li>可以用自己的话解释复杂概念</li>
                    <li>能够批判性地思考</li>
                </ul>
                
                <h2>实用的学习技巧</h2>
                
                <h3>费曼学习法</h3>
                <p>费曼学习法是一种通过教授他人来检验自己理解程度的方法：</p>
                <ol>
                    <li>选择一个概念</li>
                    <li>用简单的语言解释给别人听</li>
                    <li>识别知识gap并回到原材料</li>
                    <li>简化语言和使用类比</li>
                </ol>
                
                <h3>间隔重复</h3>
                <p>根据遗忘曲线，我们需要在特定的时间间隔内重复学习，以提高长期记忆效果。</p>
                
                <h3>多元化学习</h3>
                <p>通过不同的方式学习同一个概念：</p>
                <ul>
                    <li>阅读文字材料</li>
                    <li>观看视频教程</li>
                    <li>动手实践</li>
                    <li>与他人讨论</li>
                </ul>
                
                <h2>学习中的常见误区</h2>
                
                <h3>1. 学习幻觉</h3>
                <p>仅仅因为看过或听过某个概念，就认为自己已经掌握了。实际上，理解和掌握需要更深层次的处理。</p>
                
                <h3>2. 完美主义陷阱</h3>
                <p>试图一次性完美掌握所有知识，反而会阻碍学习进度。学习是一个迭代的过程。</p>
                
                <h3>3. 缺乏实践</h3>
                <p>理论知识必须通过实践来巩固和验证。纸上得来终觉浅，绝知此事要躬行。</p>
                
                <h2>结语</h2>
                <p>有效的学习不仅仅是知识的积累，更是思维方式的培养和能力的提升。在这个快速变化的时代，学会如何学习比学会什么更加重要。</p>
                <p>希望这些思考能对你的学习之路有所帮助。记住，学习是一个终身的过程，保持好奇心和开放的心态，享受学习的乐趣。</p>
            `
        },
        3: {
            title: '咖啡与代码的完美结合',
            date: '2025年1月5日',
            category: '生活',
            icon: 'fas fa-coffee',
            content: `
                <h2>程序员与咖啡的不解之缘</h2>
                <p>作为一名程序员，咖啡已经成为我生活中不可或缺的一部分。每天早晨，第一缕阳光透过窗户洒进来的时候，我总是会先为自己冲一杯香浓的咖啡，然后才开始一天的编程工作。</p>
                
                <h2>咖啡的魅力</h2>
                <p>咖啡不仅仅是一种饮品，它更像是一种仪式感，一种生活态度。对我而言，咖啡有以下几个方面的魅力：</p>
                
                <h3>提神醒脑</h3>
                <p>咖啡因能够刺激中枢神经系统，提高注意力和专注度。在需要长时间专注于代码的时候，一杯咖啡往往能够帮助我保持清醒的头脑。</p>
                
                <h3>仪式感</h3>
                <blockquote>
                    "生活需要仪式感，就像代码需要注释一样。"
                </blockquote>
                <p>每天的第一杯咖啡，就像是告诉自己：新的一天开始了，是时候进入工作状态了。这种仪式感能够帮助我更快地进入状态。</p>
                
                <h3>思考的伴侣</h3>
                <p>当遇到复杂的技术问题时，我喜欢端着咖啡杯，慢慢地思考。咖啡的香味和温度，似乎能够帮助我的思维变得更加活跃。</p>
                
                <h2>我的咖啡装备</h2>
                <p>作为一个对咖啡有一定要求的程序员，我的桌上总是摆放着一些咖啡装备：</p>
                
                <ul>
                    <li><strong>手冲壶</strong>：用于制作手冲咖啡，享受慢节奏的冲泡过程</li>
                    <li><strong>法压壶</strong>：简单快捷，适合忙碌的工作日</li>
                    <li><strong>意式咖啡机</strong>：周末的时候用来制作拿铁和卡布奇诺</li>
                    <li><strong>电子秤</strong>：精确控制咖啡粉和水的比例</li>
                </ul>
                
                <h2>不同时段的咖啡选择</h2>
                
                <h3>早晨：美式咖啡</h3>
                <p>早晨我通常选择美式咖啡，简单直接，能够快速唤醒沉睡的大脑。配合简单的早餐，开启充满活力的一天。</p>
                
                <h3>下午：拿铁</h3>
                <p>下午时光，我更喜欢奶香浓郁的拿铁。牛奶的加入让咖啡变得更加温和，适合下午相对轻松的工作时光。</p>
                
                <h3>深夜：不喝咖啡</h3>
                <p>虽然程序员经常需要加班，但我尽量避免在晚上喝咖啡。好的睡眠质量对于第二天的工作效率更加重要。</p>
                
                <h2>咖啡与代码的哲学</h2>
                <p>我发现咖啡和代码有很多相似之处：</p>
                
                <ul>
                    <li><strong>细节决定成败</strong>：好咖啡需要精确的水温、研磨度和冲泡时间，好代码需要精确的逻辑、语法和架构</li>
                    <li><strong>需要耐心</strong>：手冲咖啡需要耐心等待，调试代码同样需要耐心</li>
                    <li><strong>追求完美</strong>：每一杯咖啡都可以更好，每一行代码都可以更优雅</li>
                    <li><strong>享受过程</strong>：冲泡咖啡的过程和编程的过程一样，都能带来满足感</li>
                </ul>
                
                <h2>推荐几家咖啡店</h2>
                <p>作为一个咖啡爱好者，我也经常探索不同的咖啡店，寻找那些适合工作的环境：</p>
                
                <ul>
                    <li><strong>Blue Bottle Coffee</strong>：简约的装修风格，优质的咖啡豆</li>
                    <li><strong>Stumptown Coffee</strong>：浓郁的咖啡香味，适合专注工作</li>
                    <li><strong>本地独立咖啡店</strong>：往往有独特的氛围和人情味</li>
                </ul>
                
                <h2>结语</h2>
                <p>咖啡已经成为我编程生涯中不可分割的一部分。它不仅仅是一种饮品，更是一种生活方式，一种对品质的追求。</p>
                <p>在这个快节奏的科技世界中，让我们偶尔慢下来，品味一杯好咖啡，享受编程带来的乐趣。毕竟，生活不仅仅是代码，还有咖啡和诗意。</p>
                
                <blockquote>
                    "代码是逻辑的艺术，咖啡是生活的艺术。"
                </blockquote>
            `
        },
        4: {
            title: '2025年前端技术趋势预测',
            date: '2025年7月1日',
            category: '技术',
            icon: 'fas fa-rocket',
            content: `
                <h2>前言</h2>
                <p>2025年已经到来，前端技术领域继续以令人眩目的速度发展。作为前端开发者，了解和掌握最新的技术趋势对于保持竞争力至关重要。本文将分析2025年值得关注的前端技术趋势。</p>
                
                <h2>1. AI驱动的开发工具</h2>
                <p>人工智能正在深刻改变前端开发的方式：</p>
                
                <h3>智能代码生成</h3>
                <ul>
                    <li><strong>GitHub Copilot</strong> 和类似工具变得更加智能</li>
                    <li>基于自然语言的UI组件生成</li>
                    <li>自动化测试用例生成</li>
                    <li>智能代码重构和优化建议</li>
                </ul>
                
                <h3>设计到代码的自动转换</h3>
                <p>AI工具能够将设计稿直接转换为可用的前端代码，大大提高开发效率。</p>
                
                <h2>2. Web组件和微前端架构</h2>
                <p>组件化开发继续深化，微前端架构成为大型应用的主流选择：</p>
                
                <h3>Web Components标准化</h3>
                <ul>
                    <li>更好的浏览器支持</li>
                    <li>框架无关的组件复用</li>
                    <li>企业级组件库的标准化</li>
                </ul>
                
                <h3>微前端的成熟</h3>
                <blockquote>
                    "微前端让团队能够独立开发、部署和维护应用的不同部分。"
                </blockquote>
                <ul>
                    <li>Module Federation的广泛应用</li>
                    <li>更好的团队协作模式</li>
                    <li>独立部署和版本控制</li>
                </ul>
                
                <h2>3. 性能优化的新高度</h2>
                
                <h3>Core Web Vitals的持续重要性</h3>
                <p>Google的Core Web Vitals指标继续影响SEO排名，开发者需要更加关注：</p>
                <ul>
                    <li><strong>LCP (Largest Contentful Paint)</strong>：最大内容绘制</li>
                    <li><strong>FID (First Input Delay)</strong>：首次输入延迟</li>
                    <li><strong>CLS (Cumulative Layout Shift)</strong>：累积布局偏移</li>
                </ul>
                
                <h3>新的性能优化技术</h3>
                <ul>
                    <li>Streaming SSR（流式服务端渲染）</li>
                    <li>Islands Architecture（孤岛架构）</li>
                    <li>Edge-side Rendering（边缘渲染）</li>
                    <li>Progressive Hydration（渐进式水合）</li>
                </ul>
                
                <h2>4. 新兴的JavaScript运行时</h2>
                <p>Node.js不再是唯一选择，新的运行时环境带来更多可能性：</p>
                
                <h3>Deno的成熟</h3>
                <ul>
                    <li>内置TypeScript支持</li>
                    <li>更好的安全模型</li>
                    <li>标准库的完善</li>
                </ul>
                
                <h3>Bun的崛起</h3>
                <ul>
                    <li>极快的启动速度</li>
                    <li>内置打包器和测试运行器</li>
                    <li>更好的性能表现</li>
                </ul>
                
                <h2>5. CSS的现代化发展</h2>
                
                <h3>Container Queries</h3>
                <p>容器查询让组件能够根据其容器的尺寸而非视口尺寸来应用样式，实现真正的组件级响应式设计。</p>
                
                <h3>CSS层叠层（Cascade Layers）</h3>
                <p>提供更好的CSS优先级控制，解决大型项目中的样式冲突问题。</p>
                
                <h3>新的CSS特性</h3>
                <ul>
                    <li><strong>:has()</strong> 选择器</li>
                    <li><strong>Subgrid</strong> 子网格</li>
                    <li><strong>accent-color</strong> 强调色</li>
                    <li><strong>color-mix()</strong> 颜色混合函数</li>
                </ul>
                
                <h2>6. WebAssembly的广泛应用</h2>
                <p>WebAssembly (WASM) 不再只是实验性技术：</p>
                
                <ul>
                    <li>高性能计算任务的Web实现</li>
                    <li>游戏和图形处理应用</li>
                    <li>现有桌面应用的Web移植</li>
                    <li>机器学习模型的浏览器端运行</li>
                </ul>
                
                <h2>7. 低代码/无代码平台的兴起</h2>
                <p>虽然不会完全替代传统开发，但低代码平台正在改变某些开发场景：</p>
                
                <ul>
                    <li>快速原型开发</li>
                    <li>业务用户的自助开发</li>
                    <li>标准化业务流程的快速实现</li>
                </ul>
                
                <h2>8. Web3和去中心化应用</h2>
                <p>区块链技术的成熟带来了新的前端开发机会：</p>
                
                <ul>
                    <li>DApp (去中心化应用) 的前端开发</li>
                    <li>Web3钱包集成</li>
                    <li>NFT和数字资产的展示</li>
                    <li>去中心化身份验证</li>
                </ul>
                
                <h2>学习建议</h2>
                
                <h3>保持基础技能的扎实</h3>
                <p>无论技术如何发展，HTML、CSS、JavaScript的基础知识始终重要。</p>
                
                <h3>选择性学习新技术</h3>
                <p>不需要学习所有新技术，根据自己的职业规划和项目需求有选择性地学习。</p>
                
                <h3>关注社区动态</h3>
                <ul>
                    <li>定期阅读技术博客和文档</li>
                    <li>参与开源项目</li>
                    <li>参加技术会议和meetup</li>
                    <li>关注GitHub上的trending项目</li>
                </ul>
                
                <h2>结论</h2>
                <p>2025年的前端技术发展呈现出多元化的趋势。AI工具提高开发效率，性能优化要求更高，新的运行时和框架提供更多选择。作为前端开发者，我们需要保持学习的热情，同时也要理性地选择技术栈。</p>
                
                <p>记住，技术是为了解决问题而存在的。无论采用什么新技术，最终目标都是为用户提供更好的体验，为业务创造更多价值。</p>
                
                <blockquote>
                    "技术的价值在于它能解决的问题，而不在于它的新颖程度。"
                </blockquote>
            `
        }
    };

    // 文章详情页面功能
    const articleDetail = document.getElementById('article-detail');
    const articlesSection = document.getElementById('articles');
    const aboutSection = document.getElementById('about');
    const contactSection = document.getElementById('contact');
    const backButton = document.getElementById('back-to-list');

    // 处理阅读全文点击事件 - 直接绑定
    function bindReadMoreEvents() {
        const readMoreButtons = document.querySelectorAll('.read-more');
        console.log('绑定阅读全文事件，找到按钮数量:', readMoreButtons.length);
        
        readMoreButtons.forEach((button, index) => {
            const articleId = button.getAttribute('data-article-id');
            console.log(`按钮 ${index + 1} 的文章ID:`, articleId);
            
            // 移除旧的事件监听器
            button.removeEventListener('click', handleReadMore);
            
            // 添加新的事件监听器
            button.addEventListener('click', handleReadMore);
        });
    }
    
    function handleReadMore(e) {
        e.preventDefault();
        e.stopPropagation(); // 阻止事件冒泡
        
        const articleId = this.getAttribute('data-article-id');
        console.log('点击了阅读全文，文章ID:', articleId);
        
        if (articleId && articlesData[articleId]) {
            showArticleDetail(articleId);
        } else {
            console.error('未找到文章数据，ID:', articleId);
            alert('文章内容暂时无法加载，请稍后再试。');
        }
    }
    
    // 绑定事件
    bindReadMoreEvents();

    // 显示文章详情
    function showArticleDetail(articleId) {
        console.log('开始显示文章详情，ID:', articleId);
        
        const article = articlesData[articleId];
        if (!article) {
            console.error('未找到文章数据，ID:', articleId);
            alert('文章数据不存在');
            return;
        }

        console.log('找到文章数据:', article.title);

        try {
            // 填充文章内容
            const detailDate = document.getElementById('detail-date');
            const detailCategory = document.getElementById('detail-category');
            const detailTitle = document.getElementById('detail-title');
            const detailIcon = document.getElementById('detail-icon');
            const detailBody = document.getElementById('detail-body');

            if (!detailDate || !detailCategory || !detailTitle || !detailIcon || !detailBody) {
                console.error('文章详情页面元素未找到');
                alert('页面元素缺失，请刷新页面重试');
                return;
            }

            detailDate.textContent = article.date;
            detailCategory.textContent = article.category;
            detailTitle.textContent = article.title;
            detailIcon.className = article.icon;
            detailBody.innerHTML = article.content;

            // 隐藏主要内容区域
            if (articlesSection) articlesSection.style.display = 'none';
            if (aboutSection) aboutSection.style.display = 'none';
            if (contactSection) contactSection.style.display = 'none';

            // 显示文章详情
            if (articleDetail) {
                articleDetail.style.display = 'block';
                console.log('文章详情页面已显示');
            } else {
                console.error('文章详情区域未找到');
                return;
            }

            // 滚动到顶部
            window.scrollTo({ top: 0, behavior: 'smooth' });

            // 更新URL
            history.pushState({ articleId }, article.title, `#article-${articleId}`);
            
        } catch (error) {
            console.error('显示文章详情时出错:', error);
            alert('加载文章时出现错误，请刷新页面重试');
        }
    }

    // 返回文章列表
    if (backButton) {
        backButton.addEventListener('click', function() {
            hideArticleDetail();
        });
    }

    function hideArticleDetail() {
        // 隐藏文章详情
        articleDetail.style.display = 'none';

        // 显示主要内容区域
        articlesSection.style.display = 'block';
        aboutSection.style.display = 'block';
        contactSection.style.display = 'block';

        // 滚动到文章列表
        articlesSection.scrollIntoView({ behavior: 'smooth' });

        // 更新URL
        history.pushState({}, '我的博客', '/');
    }

    // 处理浏览器前进/后退按钮
    window.addEventListener('popstate', function(event) {
        if (event.state && event.state.articleId) {
            showArticleDetail(event.state.articleId);
        } else {
            hideArticleDetail();
        }
    });

    // 检查URL是否包含文章ID（页面刷新时）
    const hash = window.location.hash;
    if (hash.startsWith('#article-')) {
        const articleId = hash.replace('#article-', '');
        if (articlesData[articleId]) {
            showArticleDetail(articleId);
        }
    }

    // 初始化检查
    console.log('=== 博客页面初始化检查 ===');
    console.log('文章详情区域:', document.getElementById('article-detail'));
    console.log('文章数据:', Object.keys(articlesData));
    console.log('阅读全文按钮:', document.querySelectorAll('.read-more').length);
    
    // 测试函数
    window.testArticleDetail = function(id) {
        console.log('测试显示文章', id);
        showArticleDetail(id);
    };
    
    console.log('🎉 博客页面已加载完成！');
    console.log('💡 可以在控制台输入 testArticleDetail(1) 来测试文章详情功能');
});

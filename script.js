// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 图片悬停效果
document.querySelectorAll('.portfolio-item img').forEach(img => {
    img.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.05)';
        this.style.transition = 'transform 0.3s ease';
    });

    img.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
    });
});

// 导航栏响应式
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // 切换导航
        nav.classList.toggle('nav-active');

        // 动画链接
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // 汉堡动画
        burger.classList.toggle('toggle');
    });
}

navSlide();

// 项目详情数据
const projectDetails = {
    project1: {
        title: "中指云· 数据商城",
        description: `
            <h4>项目描述：</h4>
            <p>【To C项目】中指研究院基于强大的数据基础和技术能力，建立了中国历时长、信息全、覆盖范围广的CREIS中指数据库，服务于中国95%以上的房地产品牌企业，以及国内外主流金融机构高校和房地产上下游企业。为了开拓数据零售业务市场，在中指云平台开发数据商城产品，实现数据线上下单、线上支付、线上交付功能。</p>
            <h4>架构及技术：</h4>
            <p>分布式架构</p>
            <p>技术栈：SpringBoot，SpringCloud，Spring，Mybatis，Redis，Mysql，Clickhouse，Seata ，S3</p>
            <h4>团队规模：</h4>
            <p>7人</p>
            <h4>职责描述：</h4>
            <ul>
                <li>特定时间多用户抢优惠券的场景，使用redission实现分布式锁，解决分布式数据安全问题。为了保证锁的高可用，协调多个无关的redis节点，实现红锁的思想，保证锁的可用性</li>
                <li>订单支付之后，引入seata 服务，实现分布式事务，保证订单，数据的最终一致性</li>
                <li>开发统一数据提取，参数解析，价格计算接口，内部使用工厂模式来完整多种数据的统一的架构，提升开发效率</li>
                <li>协调产品，前端，后端，数据，测试。推进整个项目开发上线。对后端任务的协调分配。</li>
            </ul>
        `
    },
    project2: {
        title: "CREIS中指 · 开发云",
        description: `
            <h4>项目描述：</h4>
            <p>【To B项目】是针对房企高效看地、分析土地价值、研判城市进入策略，一键生成土地测算结果与地块可研报告，打通中指数据库各类数据，全面开放房产交易、土地、企业、宏观、报告等数据的查询、统计、可视化的数据产品。</p>
            <h4>架构及技术：</h4>
            <p>分布式架构</p>
            <p>技术栈：SpringBoot，SpringCloud，Spring，Mybatis，Redis，Mysql，Clickhouse ，S3，ElasticSearch，RabbitMQ</p>
            <h4>团队规模：</h4>
            <p>10 人</p>
            <h4>职责描述：</h4>
            <ul>
                <li>数加入列式数据库Clickhouse，支持快捷交叉分OLAP功能。使用ETL工具Kettle实现数据同步</li>
                <li>开发后核心组件tabledata，支持交易数据可按户型、面积、价格等维度快捷交叉分析，内部使用策略模式，工厂模式，单例模式设计模式，实现功能组件化，和业务功能的可扩展性</li>
                <li>对第三方开发数据接口，在对第三方调用进行统计，使用RabbitMQ将统计服务进行解耦，分布式异步调用</li>
                <li>支持业务接口的开发，例如对接极海实现数据上图等。</li>
            </ul>
        `
    },
    project3: {
        title: "阳光共治平台系统【迭代开发】",
        description: `
            <h4>项目描述：</h4>
            <p>【To B项目】分为PC端,手机端，此项目为国家食品安全局推广（央视新闻报道），服务主体通过摄像头、视频共享技术将自己的生产环节公示给民众，民众通过手机可以随时随地看到服务主体的生产过程、加工过程、销售过程等。</p>
            <h4>架构及技术：</h4>
            <p>单体架构</p>
            <p>技术栈：Spring MVC，Spring，Mybatis，Redis，Mysql</p>
            <h4>团队规模：</h4>
            <p>7 人</p>
            <h4>职责描述：</h4>
            <ul>
                <li>主要开发低代码生成平台，负责提供表单搭建的接口，业务设计。（监管服务和个人服务分别提供PC端和H5端后端接口）</li>
                <li>负责开发各种建模需要配置方案接口，能够实现无代码配置功能页面</li>
                <li>系统从传统的单项目做分布式拆分，将项目拆分为多个组件分布式部署</li>
                <li>SkyWalking 链路追踪监控，搭建Jenkins自动化部署</li>
                <li>跨平台数据维护，服务器日常维护</li>
            </ul>
        `
    }
};

// 显示项目详情
function showProjectDetails(projectId) {
    const modal = document.getElementById("projectModal");
    const title = document.getElementById("projectTitle");
    const description = document.getElementById("projectDescription");
    
    title.textContent = projectDetails[projectId].title;
    description.innerHTML = projectDetails[projectId].description;
    
    modal.style.display = "block";
}

// 关闭模态框
document.querySelector(".close").onclick = function() {
    document.getElementById("projectModal").style.display = "none";
}

// 点击模态框外部关闭
window.onclick = function(event) {
    const modal = document.getElementById("projectModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// 工作经历数据
const experienceData = {
    "房天下": {
        company: "房天下（中国指数研究院）",
        position: "高级开发工程师",
        period: "2021年3月 - 2024年8月",
        responsibilities: [
            "负责公司核心业务系统的开发和维护",
            "优化系统性能，提高用户体验",
            "指导初级开发人员，组织技术分享会"
        ]
    },
    "金和网络": {
        company: "北京金和网络股份有限公司",
        position: "JAVA开发工程师",
        period: "2019年10月 - 2021年3月",
        responsibilities: [
            "参与多个Web应用项目的开发",
            "实现RESTful API和数据库设计",
            "编写单元测试，确保代码质量"
        ]
    },
    "昌硕科技": {
        company: "昌硕科技（上海）有限公司",
        position: "JAVA开发工程师",
        period: "2017年7月 - 2019年4月",
        responsibilities: [
            "参与企业级应用的开发和维护",
            "协助优化数据库查询性能",
            "参与代码审查，提高团队代码质量"
        ]
    }
};

// 显示工作经历详情
function showExperienceDetails(company) {
    const details = experienceData[company];
    const detailsContainer = document.getElementById('experience-details');
    detailsContainer.innerHTML = `
        <h4>${details.company}</h4>
        <p><strong>${details.position}</strong></p>
        <p>${details.period}</p>
        <ul>
            ${details.responsibilities.map(resp => `<li>${resp}</li>`).join('')}
        </ul>
    `;
    detailsContainer.style.display = 'block';
    
    // 滚动到详细信息
    detailsContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// 为每个时间线项添加点击事件
document.querySelectorAll('.timeline-item').forEach(item => {
    item.addEventListener('click', function() {
        const company = this.getAttribute('data-company');
        showExperienceDetails(company);
    });
});
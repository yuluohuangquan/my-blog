# Host: localhost  (Version: 5.7.26)
# Date: 2020-06-10 17:36:04
# Generator: MySQL-Front 5.3  (Build 4.234)

#
# Database "react_blog"
#

CREATE DATABASE IF NOT EXISTS `react_blog` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci */;
USE `react_blog`;

/*!40101 SET NAMES utf8 */;

#
# Structure for table "admin_user"
#

DROP TABLE IF EXISTS `admin_user`;
CREATE TABLE `admin_user` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `userName` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

#
# Data for table "admin_user"
#

/*!40000 ALTER TABLE `admin_user` DISABLE KEYS */;
INSERT INTO `admin_user` VALUES (1,'admin','123456');
/*!40000 ALTER TABLE `admin_user` ENABLE KEYS */;

#
# Structure for table "article"
#

DROP TABLE IF EXISTS `article`;
CREATE TABLE `article` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `type_id` int(11) NOT NULL DEFAULT '0',
  `title` varchar(255) NOT NULL DEFAULT '',
  `article_content` longtext NOT NULL,
  `introduce` text,
  `addTime` int(11) DEFAULT NULL,
  `view_count` int(11) NOT NULL DEFAULT '0',
  `part_count` int(11) DEFAULT '0',
  `article_content_html` longtext,
  `introduce_html` text,
  `isTop` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=57 DEFAULT CHARSET=utf8;

#
# Data for table "article"
#

/*!40000 ALTER TABLE `article` DISABLE KEYS */;
INSERT INTO `article` VALUES (56,3,'React学习路线-按此路线学习顺畅无比','\n如果你想全面的学习React的知识，可以安装这篇文章的顺序进行学习，这个从基础到实战都有了，如果你全部学完，一定对React有一个全面了解。\n','\n如果你想全面的学习React的知识，可以安装这篇文章的顺序进行学习，这个从基础到实战都有了，如果你全部学完，一定对React有一个全面了解。\n',1577116800,1025,0,'<p>如果你想全面的学习React的知识，可以安装这篇文章的顺序进行学习，这个从基础到实战都有了，如果你全部学完，一定对React有一个全面了解。</p>\n<a id=\"toc21\" href=\"#toc21\" class=\"anchor-fix\"><h2>React16版基础视频【28集】</h2></a>\n<p>从这里开始学习吧。</p>\n','<p>如果你想全面的学习React的知识，可以安装这篇文章的顺序进行学习，这个从基础到实战都有了，如果你全部学完，一定对React有一个全面了解。</p>\n',0);
/*!40000 ALTER TABLE `article` ENABLE KEYS */;

#
# Structure for table "bibidao"
#

DROP TABLE IF EXISTS `bibidao`;
CREATE TABLE `bibidao` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(50) NOT NULL,
  `url` varchar(100) NOT NULL,
  `image` varchar(100) NOT NULL,
  `order_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

#
# Data for table "bibidao"
#

/*!40000 ALTER TABLE `bibidao` DISABLE KEYS */;
INSERT INTO `bibidao` VALUES (2,'大胖逼逼叨01-如何高效学习新编程技术','https://www.bilibili.com/video/av71198525','http://newimg.jspang.com/bbd01.jpg',0),(3,'大胖逼逼叨02-三招提高代码质量','https://www.bilibili.com/video/av71895773','http://newimg.jspang.com/bbd02.jpg',0),(4,'程序员到底学什么语言好','https://www.bilibili.com/video/av73559188','http://newimg.jspang.com/bbd03.jpg',0),(7,'12年程序员感悟编程的意义','https://www.bilibili.com/video/av76092987','http://newimg.jspang.com/bbd06.jpg',0),(8,'大胆预测明年软件开发趋势','https://www.bilibili.com/video/av76812128','http://newimg.jspang.com/bbd07.jpg',0),(9,'如何布置桌面提高编码效率','https://www.bilibili.com/video/av77639437','http://newimg.jspang.com/bbd08.jpg',0),(10,'程序员通关阿里面试全攻略','https://www.bilibili.com/video/av78596180','http://newimg.jspang.com/bbd09.jpg',0),(11,'三招提高代码质量','https://www.bilibili.com/video/av71895773','http://newimg.jspang.com/bbd02.jpg',0),(12,'2019年前端大事回顾','https://www.bilibili.com/video/av79321463','http://newimg.jspang.com/bbd10.jpg',0);
/*!40000 ALTER TABLE `bibidao` ENABLE KEYS */;

#
# Structure for table "daletou"
#

DROP TABLE IF EXISTS `daletou`;
CREATE TABLE `daletou` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `date` int(11) DEFAULT NULL COMMENT '期数',
  `num1` int(11) DEFAULT NULL COMMENT '第1位数',
  `num2` int(11) DEFAULT NULL COMMENT '第2位数',
  `num3` int(11) DEFAULT NULL COMMENT '第3位数',
  `num4` int(11) DEFAULT NULL COMMENT '第4位数',
  `num5` int(11) DEFAULT NULL COMMENT '第5位数',
  `num6` int(11) DEFAULT NULL COMMENT '第6位数',
  `num7` int(11) DEFAULT NULL COMMENT '第7位数',
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=61 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

#
# Data for table "daletou"
#

/*!40000 ALTER TABLE `daletou` DISABLE KEYS */;
INSERT INTO `daletou` VALUES (1,20045,23,9,27,16,2,8,3),(2,20044,3,1,28,22,30,2,5),(3,20043,17,32,31,12,13,6,1),(4,20042,5,11,3,4,22,5,6),(5,20041,13,34,7,20,29,4,7),(6,20040,29,28,2,20,17,1,7),(7,20039,1,5,22,31,15,9,2),(8,20038,20,24,22,15,4,1,9),(9,20037,4,10,1,11,14,2,5),(10,20036,11,1,5,26,12,2,7),(11,20035,28,11,10,26,22,4,2),(12,20045,23,9,27,16,2,8,3),(13,20044,3,1,28,22,30,2,5),(14,20045,23,9,27,16,2,8,3),(15,20044,3,1,28,22,30,2,5),(16,20034,13,20,31,11,27,2,4),(17,20033,34,19,20,7,31,8,5),(18,20032,9,32,2,16,3,3,4),(19,20031,2,1,5,21,15,4,5),(20,20030,8,1,17,30,27,5,6),(21,20029,11,22,17,30,14,9,7),(22,20028,4,35,5,34,28,8,1),(23,20027,32,20,25,4,7,9,3),(24,20026,32,26,3,34,15,12,8),(25,20025,22,26,21,14,2,7,5),(26,20024,24,3,5,30,6,7,3),(27,20034,13,20,31,11,27,2,4),(28,20033,34,19,20,7,31,8,5),(29,20032,9,32,2,16,3,3,4),(30,20031,2,1,5,21,15,4,5),(31,20030,8,1,17,30,27,5,6),(32,20029,11,22,17,30,14,9,7),(33,20028,4,35,5,34,28,8,1),(34,20027,32,20,25,4,7,9,3),(35,20026,32,26,3,34,15,12,8),(36,20025,22,26,21,14,2,7,5),(37,20024,24,3,5,30,6,7,3),(38,20023,11,26,23,4,30,1,6),(39,20022,14,4,20,35,28,2,3),(40,20021,31,33,10,12,24,4,9),(41,20020,8,10,12,26,32,9,5),(42,20019,1,22,33,12,23,1,12),(43,20018,9,16,24,26,14,12,4),(44,20017,9,6,10,1,7,11,2),(45,20016,35,19,8,4,31,1,2),(46,20015,1,7,24,26,23,3,7),(47,20014,9,7,17,3,21,3,6),(48,20013,1,4,35,5,11,9,3),(49,20012,34,18,6,1,32,3,1),(50,20011,2,22,23,13,19,2,7),(51,20010,13,1,8,32,24,9,2),(52,20009,34,19,31,29,35,10,6),(53,20008,17,14,24,32,19,6,1),(54,20007,2,10,30,19,24,5,8),(55,20006,22,32,9,31,25,8,12),(56,20005,10,34,35,6,33,3,1),(57,20004,20,17,21,29,30,5,9),(58,20003,30,23,26,25,34,7,3),(59,20002,25,18,7,30,3,7,2),(60,20001,26,34,17,32,25,4,7);
/*!40000 ALTER TABLE `daletou` ENABLE KEYS */;

#
# Structure for table "type"
#

DROP TABLE IF EXISTS `type`;
CREATE TABLE `type` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `typeName` varchar(255) DEFAULT NULL,
  `orderNum` int(11) DEFAULT NULL,
  `icon` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=100 DEFAULT CHARSET=utf8;

#
# Data for table "type"
#

/*!40000 ALTER TABLE `type` DISABLE KEYS */;
INSERT INTO `type` VALUES (1,'学习路上',1,'youtube'),(2,'最新技术',2,'message'),(3,'算法学习',3,'smile'),(4,'暴富之路',4,'page');
/*!40000 ALTER TABLE `type` ENABLE KEYS */;

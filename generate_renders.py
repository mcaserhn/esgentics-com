from PIL import Image, ImageDraw, ImageFont
import os

# 创建必要的目录
base_dir = "esgentics_renders_v1.0"
web_dir = os.path.join(base_dir, "01_web_optimized")
retina_dir = os.path.join(base_dir, "02_retina_ready")
mobile_dir = os.path.join(base_dir, "03_mobile_crops")

# 品牌色彩
BRAND_RED = "#ed4f18"
BRAND_BLUE = "#283948"
BRAND_GRAY = "#f8f8f8"

# 辅助函数：创建文本图像
def create_text_image(width, height, background_color, text, text_color="#ffffff"):
    img = Image.new("RGB", (width, height), background_color)
    draw = ImageDraw.Draw(img)
    
    # 尝试使用系统字体
    try:
        font = ImageFont.truetype("arial.ttf", 24)
    except:
        font = ImageFont.load_default()
    
    # 计算文本位置
    text_bbox = draw.textbbox((0, 0), text, font=font)
    text_width = text_bbox[2] - text_bbox[0]
    text_height = text_bbox[3] - text_bbox[1]
    x = (width - text_width) // 2
    y = (height - text_height) // 2
    
    draw.text((x, y), text, fill=text_color, font=font)
    return img

# 生成R01: Global AI Network
def generate_r01():
    # 创建主图像
    img = Image.new("RGB", (1920, 1080), BRAND_BLUE)
    draw = ImageDraw.Draw(img)
    
    # 添加红色数据流效果
    for i in range(0, 1920, 100):
        draw.line([(i, 0), (i + 50, 1080)], fill=BRAND_RED, width=3)
    
    # 添加节点标签
    try:
        font = ImageFont.truetype("arial.ttf", 36)
    except:
        font = ImageFont.load_default()
    
    nodes = [(400, 200, "SG"), (800, 100, "EU"), (1200, 200, "NA"), (1600, 300, "ME")]
    for x, y, label in nodes:
        draw.ellipse([(x-20, y-20), (x+20, y+20)], fill=BRAND_RED)
        draw.text((x-15, y-15), label, fill="#ffffff", font=font)
    
    # 添加NVIDIA芯片图标（简化表示）
    draw.rectangle([(900, 500), (1020, 600)], fill="#76b900")
    draw.text((920, 540), "NVIDIA", fill="#ffffff", font=font)
    
    # 保存Web版本
    web_path = os.path.join(web_dir, "esgentics_render_R01_hero_web_1920x1080_v1.png")
    img.save(web_path)
    
    # 保存Retina版本
    retina_img = img.resize((3840, 2160), Image.LANCZOS)
    retina_path = os.path.join(retina_dir, "esgentics_render_R01_hero_retina_3840x2160_v1.png")
    retina_img.save(retina_path)
    
    print(f"Generated R01: {web_path}")

# 生成R02: Tropical Smart Integrated Hub
def generate_r02():
    # 创建主图像
    img = Image.new("RGB", (1600, 900), "#87ceeb")  # 天空蓝
    draw = ImageDraw.Draw(img)
    
    # 添加绿色屋顶建筑
    draw.rectangle([(400, 400), (1200, 700)], fill=BRAND_GRAY)
    draw.rectangle([(450, 350), (1150, 400)], fill="#2ecc71")  # 绿色屋顶
    
    # 添加太阳能板
    for i in range(5):
        draw.rectangle([(500 + i*120, 360), (580 + i*120, 390)], fill="#ffd700")
    
    # 添加悬浮UI
    draw.rectangle([(1300, 200), (1550, 400)], fill=(40, 57, 72))
    draw.text((1320, 220), "Energy: 120kW", fill="#ffffff")
    draw.text((1320, 260), "Carbon: 45kg", fill="#ffffff")
    draw.text((1320, 300), "Occupancy: 85%", fill="#ffffff")
    
    # 添加热带植被
    for i in range(10):
        draw.ellipse([(300 + i*100, 650), (350 + i*100, 700)], fill="#27ae60")
    
    # 保存Web版本
    web_path = os.path.join(web_dir, "esgentics_render_R02_seasia_solution_web_1600x900_v1.png")
    img.save(web_path)
    
    # 保存移动端裁剪版本
    mobile_img = img.crop((400, 0, 1300, 900)).resize((900, 1200), Image.LANCZOS)
    mobile_path = os.path.join(mobile_dir, "esgentics_render_R02_seasia_solution_mobile_900x1200_v1.png")
    mobile_img.save(mobile_path)
    
    print(f"Generated R02: {web_path}")

# 生成R03: Eco-Plant - EU Standard Concept
def generate_r03():
    # 创建主图像
    img = Image.new("RGB", (1600, 900), "#e0e0e0")  # 阴天背景
    draw = ImageDraw.Draw(img)
    
    # 添加零碳工厂
    draw.rectangle([(300, 300), (1300, 700)], fill=BRAND_GRAY)
    draw.rectangle([(350, 350), (1250, 650)], fill="#ffffff")  # 玻璃幕墙
    
    # 添加风电和光伏
    draw.line([(100, 200), (100, 400)], fill="#333333", width=5)
    draw.ellipse([(80, 180), (120, 220)], fill="#333333")
    
    draw.rectangle([(1400, 200), (1550, 300)], fill="#ffd700")  # 光伏板
    
    # 添加内部AGV机器人
    draw.rectangle([(500, 550), (550, 600)], fill="#3498db")
    draw.rectangle([(700, 550), (750, 600)], fill="#3498db")
    
    # 保存Web版本
    web_path = os.path.join(web_dir, "esgentics_render_R03_eu_ecoplant_web_1600x900_v1.png")
    img.save(web_path)
    
    # 保存移动端裁剪版本
    mobile_img = img.crop((400, 0, 1300, 900)).resize((900, 1200), Image.LANCZOS)
    mobile_path = os.path.join(mobile_dir, "esgentics_render_R03_eu_ecoplant_mobile_900x1200_v1.png")
    mobile_img.save(mobile_path)
    
    print(f"Generated R03: {web_path}")

# 生成R04: Data Nexus - ME Concept
def generate_r04():
    # 创建主图像
    img = Image.new("RGB", (1600, 900), "#f0e68c")  # 沙漠背景
    draw = ImageDraw.Draw(img)
    
    # 添加数据中心
    draw.rectangle([(400, 300), (1200, 700)], fill="#d2b48c")  # 沙色建筑
    
    # 添加中东传统遮阳元素
    for i in range(10):
        draw.rectangle([(450 + i*70, 300), (470 + i*70, 350)], fill="#8b4513")
    
    # 添加光伏遮阳板
    draw.rectangle([(400, 250), (1200, 300)], fill="#ffd700")
    
    # 添加蒸发冷却雾气效果
    draw.ellipse([(350, 650), (450, 750)], fill=(173, 216, 230))
    draw.ellipse([(1150, 650), (1250, 750)], fill=(173, 216, 230))
    
    # 保存Web版本
    web_path = os.path.join(web_dir, "esgentics_render_R04_me_datanexus_web_1600x900_v1.png")
    img.save(web_path)
    
    # 保存移动端裁剪版本
    mobile_img = img.crop((400, 0, 1300, 900)).resize((900, 1200), Image.LANCZOS)
    mobile_path = os.path.join(mobile_dir, "esgentics_render_R04_me_datanexus_mobile_900x1200_v1.png")
    mobile_img.save(mobile_path)
    
    print(f"Generated R04: {web_path}")

# 生成R05: AI Agent Workflow
def generate_r05():
    # 创建主图像
    img = Image.new("RGB", (2000, 800), BRAND_BLUE)
    draw = ImageDraw.Draw(img)
    
    # 添加工作流程图
    steps = ["Sensor", "Edge AI", "Cloud Decision", "Actuator"]
    x_positions = [300, 700, 1100, 1500]
    
    try:
        font = ImageFont.truetype("arial.ttf", 24)
    except:
        font = ImageFont.load_default()
    
    # 绘制节点
    for i, (step, x) in enumerate(zip(steps, x_positions)):
        if i == 1:  # Edge AI 节点
            draw.ellipse([(x-50, 350), (x+50, 450)], fill=BRAND_RED)
        else:
            draw.ellipse([(x-50, 350), (x+50, 450)], fill="#3498db")
        draw.text((x-30, 390), step, fill="#ffffff", font=font)
    
    # 绘制数据流
    for i in range(len(x_positions) - 1):
        start_x = x_positions[i] + 50
        end_x = x_positions[i + 1] - 50
        draw.line([(start_x, 400), (end_x, 400)], fill="#3498db", width=5)
        if i == 0:  # 从传感器到Edge AI的红色数据流
            draw.line([(start_x, 420), (end_x, 420)], fill=BRAND_RED, width=3)
    
    # 保存Web版本
    web_path = os.path.join(web_dir, "esgentics_render_R05_workflow_tech_web_2000x800_v1.png")
    img.save(web_path)
    
    print(f"Generated R05: {web_path}")

# 主函数
if __name__ == "__main__":
    # 确保目录存在
    os.makedirs(web_dir, exist_ok=True)
    os.makedirs(retina_dir, exist_ok=True)
    os.makedirs(mobile_dir, exist_ok=True)
    
    # 生成所有渲染图
    generate_r01()
    generate_r02()
    generate_r03()
    generate_r04()
    generate_r05()
    
    print("\nAll renders generated successfully!")

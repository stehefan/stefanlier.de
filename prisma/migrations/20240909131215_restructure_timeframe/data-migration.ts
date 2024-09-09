import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    await prisma.$transaction(async (tx) => {
        const experiences = await tx.experience.findMany()

        for (const experience of experiences) {
            // Remove the square brackets and whitespace from the timeframe
            const cleanedTimeframe = experience.timeframe.replace(/\[.*\]/g, '').trim()

            // Get start and end time
            const timeframeParts = cleanedTimeframe.split(' - ')

            const startTime = new Date(`${timeframeParts[0]} UTC`)
            const endTime = new Date(`${timeframeParts[1]} UTC`)


            await tx.experience.update({
                where: {id: experience.id},
                data: {
                    startTime: startTime,
                    endTime: endTime
                },
            })
        }
    })
}

main()
    .catch(async (e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => await prisma.$disconnect())